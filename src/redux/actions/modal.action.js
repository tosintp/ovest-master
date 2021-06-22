import modalActionTypes from "../types/modal.types";

export const showModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
  payload: true,
});
export const showWithdrawalModal = () => ({
  type: modalActionTypes.SHOW_MODAL,
  payload: true,
});
export const hideModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
  payload: false,
});
export const hideWithdrawalModal = () => ({
  type: modalActionTypes.HIDE_MODAL,
  payload: false,
});
