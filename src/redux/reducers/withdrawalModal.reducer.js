import modalActionTypes from "../types/modal.types";

const INITIAL_STATE = {
  showWithdrawalModal: false,
};

const WithdrawalModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_WITHDRAWAL_MODAL:
      return { ...state, showWithdrawalModal: action.payload };

    case modalActionTypes.HIDE_WITHDRAWAL_MODAL:
      return { ...state, hideWithdrawalModal: action.payload };
    default:
      return state;
  }
};

export default WithdrawalModalReducer;
