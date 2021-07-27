import * as moment from "moment";

import { API_URL } from "./config";
import { HttpException } from "./exceptions";
import { HTTPModule } from "./http";
import { Util } from "./util";

export class User extends HTTPModule {
  constructor() {
    super({
      baseURL: `${API_URL}/user`,
    });

    if (localStorage.authToken) {
      const { authToken } = localStorage;
      super.updateRequestConfig({
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }
  }

  async login(credentials) {
    const { data } = await this.post("/login", credentials);
    const { user, access_token } = data;
    user.token = access_token;

    return user;
  }

  async register(credentials) {
    const { message } = await this.post("/create", credentials);
    const { user, token } = message;
    user.token = token;

    return user;
  }

  async profile() {
    const { data: user } = await this.get("/profile");
    const token = localStorage.authToken;
    user.token = token;

    return user;
  }

  async resendOtp(payload) {
    await this.post("/email/otp/send", payload);
  }

  async verifyEmail(payload) {
    return this.post("/email/otp/verify", payload);
  }

  async verifyUserStatus() {
    const { message } = await this.get("/status");

    return message.includes("active");
  }

  async getUserStatus() {
    const {
      0: { data },
    } = await this.get("/status");

    return data;
  }

  async getCountries() {
    const { data } = await this.get("/countries");

    return data;
  }

  async getStates() {
    const { data } = await this.get("/states/160");

    return data;
  }

  async getBanks() {
    const {
      data: [data],
    } = await this.get("/banks");

    return data;
  }

  async verifyAccountNumber(payload) {
    const [{ data }] = await this.post("/account/verify", payload);

    return data;
  }

  async getBalances() {
    const { data } = await this.get("/balances");

    return {
      ...data,
      ovest: Util.formatMoneyNumber(data.wallet_balance),
      savest: {
        total: Util.formatMoneyNumber(data.savest_total_balance),
        percentageChane: 0.3,
        totalReturns: Util.formatMoneyNumber(data.total_savest_return),
      },
      investment: {
        total: Util.formatMoneyNumber(data.total_amount_invested),
        percentageChane: 2,
        totalReturns: Util.formatMoneyNumber(data.total_investment_return),
      },
    };
  }

  async getTransactions() {
    return this.mockCall(
      Array(4)
        .fill(null)
        .map((_val, index) => {
          const sign = Math.random() > 0.5 ? -1 : 1;
          const amount = Math.random() * 100000 * sign;
          const descIndex = sign > 0 ? 0 : 1;

          return {
            id: `transaction-${index}`,
            dateResolved: moment().subtract(index, "months").toDate(),
            status: "Processed",
            amount,
            description: ["Wallet deposit", "Wallet withrawal"][descIndex],
          };
        })
    );
  }

  async bankTransfer(payload) {
    const { status } = await this.post("/wallet/deposit/bank", payload);
    if (!status.includes("succes")) {
      throw new HttpException("bank transfer failed", 400);
    }
  }

  async initiateCard(payload) {
    const {
      data: { link },
    } = await this.post("/wallet/deposit/card", payload);
    console.log(payload);

    return link;
  }

  async getInvestmentStats() {
    return this.mockCall({
      totalAmountInvested: Util.formatMoneyNumber(Math.random() * 100000),
      totalInvestmentPackages: 4,
      totalReturns: Util.formatMoneyNumber(Math.random() * 50000),
      portfolioChange: 4.26,
    });
  }

  async getUserInvestments() {
    return this.mockCall(
      Array(4)
        .fill(null)
        .map((_, id) => ({
          status: Util.randomChoice(["matured", "in-progress"]),
          duration: Math.floor(Math.random() * 5 + 1),
          startDate: moment()
            .subtract(Math.floor(Math.random() * 5 + 1), "months")
            .toDate(),
          interest: Math.floor(Math.random() * 10 + 1),
          change: 13,
          returns: Util.formatMoneyNumber(Math.random() * 100000),
          payout: Util.formatMoneyNumber(Math.random() * 100000),
          name: Util.randomChoice([
            "Silvest Investment Plan",
            "Goldest Investment Plan",
            "Platinumest Investment Plan",
          ]),
          capital: Util.formatMoneyNumber(Math.random() * 100000),
          balance: Util.formatMoneyNumber(Math.random() * 600000),
          isSpecial: Util.randomChoice([true, false]),
          investmentType: "Real Estate",
          location: "Ibadan",
          propertyName: "Moniya (DryPort/Railway)",
          transactions: Array(60)
            .fill(null)
            .map((_, index) => {
              const date = moment().subtract(index, "days").toDate();
              const earning = 200;

              return { date, earning };
            }),
          id,
        }))
    );
  }

  async activateCryptoAccount() {
    const { status } = await this.post("/cryptodeposit/activate");

    return status === "success";
  }

  async activateDollarAccount() {
    const { data } = await this.post("/dollarwallet/activate");

    return data;
  }

  async updateUserProfile(payload) {
    const {
      message: { data },
    } = await this.post("/profile/update", payload);

    return data;
  }

  async addBankAccount(payload) {
    const { data, status, message } = await this.post("/bank/add", payload);
    if (status !== "success") {
      throw new HttpException(message, 400);
    }

    return data;
  }

  async getSavedBanks() {
    const { data } = await this.get("/saved_banks");

    return data;
  }

  async deleteBankAccount(id) {
    await this.post(`/bank_account/delete/${id}`);
  }

  async getSavestTransactions() {
    const { data } = await this.get("/savest/transactions");

    return data;
  }
}

export class $api {
  static updateRequestConfig(config) {
    console.log(config);
    $api.user.updateRequestConfig(config);
  }

  static user = new User();
}
