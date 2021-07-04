import modalActionTypes from "../types/modal.types";

const INITIAL_STATE = {
  showModal: true,
  showWithdrawalModal: true,
  showInvestModal: true,
};

const DashModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return { ...state, showModal: true };

    case modalActionTypes.HIDE_MODAL:
      return { ...state, showModal: false };

    case modalActionTypes.SHOW_WITHDRAWAL_MODAL:
      return { ...state, showWithdrawalModal: true };

    case modalActionTypes.HIDE_WITHDRAWAL_MODAL:
      return { ...state, showWithdrawalModal: false };

    case modalActionTypes.SHOW_INVEST_MODAL:
      return { ...state, showInvestModal: true };

    case modalActionTypes.HIDE_INVEST_MODAL:
      return { ...state, showInvestModal: false };

    default:
      return state;
  }
};

export default DashModalReducer;
