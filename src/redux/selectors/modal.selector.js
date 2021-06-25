import { createSelector } from "reselect";

export const selectModal = (state) => state.DashModalReducer;

export const showModalState = createSelector(
  [selectModal],
  (modal) => modal.showModal
);
export const showWithdrawalModalState = createSelector(
  [selectModal],
  (modal) => modal.showWithdrawalModal
);

export const hideModalState = createSelector(
  [selectModal],
  (modal) => modal.hideModal
);
export const hideWithdrawalModalState = createSelector(
  [selectModal],
  (modal) => modal.showWithdrawalModal
);
