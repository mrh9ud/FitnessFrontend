import { LOADING, LOADING_COMPLETE, LOADING_EXTRA_DATA, LOADING_EXTRA_DATA_COMPLETE } from '../actions/actionType'

const initialState = {
  loading: false,
  loadingExtraData: false
}

const loadingReducer = (state=initialState, action) => {
    switch (action.type) {
      case LOADING:
        return { ...state, loading: true }
      case LOADING_COMPLETE:
        return { ...state, loading: false}
      case LOADING_EXTRA_DATA:
        return { ...state, loadingExtraData: true }
      case LOADING_EXTRA_DATA_COMPLETE:
        return { ...state, loadingExtraData: false }
      default:
        return state
    }
  }

export default loadingReducer