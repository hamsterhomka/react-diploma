import { TOGGLE_NAV_BAR_SEARCH } from '../actions/actionTypes';

const initialState = {
  isSearchFormHidden: true,
};

export default function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV_BAR_SEARCH: {
      return { ...state, isSearchFormHidden: !state.isSearchFormHidden };
    }
    default:
      return { ...state };
  }
}
