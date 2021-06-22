import modalActionTypes from "../types/modal.types";

const INITIAL_STATE = {
  showModal: false,
};

const DashModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.SHOW_MODAL:
      return { ...state, showModal: action.payload };

    case modalActionTypes.HIDE_MODAL:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};

export default DashModalReducer;
