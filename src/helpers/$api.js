import { API_URL } from "./config";
import { HTTPModule } from "./http";

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
}

export class $api {
  static updateRequestConfig(config) {
    $api.user.updateRequestConfig(config);
  }

  static user = new User();
}
