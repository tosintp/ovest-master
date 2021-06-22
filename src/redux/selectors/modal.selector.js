import { createSelector } from 'reselect';

export const selectModal = (state) => state.DashModalReducer;

export const showModalState = createSelector([selectModal], (modal) => modal.showModal);

export const hideModalState = createSelector([selectModal], (modal) => modal.hideModal);