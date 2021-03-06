import constants from '../constants';

const errorReducer = (state = {
  error: false,
  errorMessage: ''
}, action) => {
  switch (action.type) {
    case constants.PARSE_FAILED:
      return {
        error: action.payload.error,
        errorMessage: action.payload.errorMessage
      };
    case constants.PARSE_SUCCESS:
      return {
        error: false,
        errorMessage: ''
      };
    default:
      return state;
  }
};

export default errorReducer;
