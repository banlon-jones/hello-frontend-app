// Actions
const ADD_MESSAGE = 'bookStore/home/ADD_BOOK';

// initail state
const initialState = {
  message: '',
};

// Action creators
export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
});

export const getGreetings = () =>
  // eslint-disable-next-line no-unused-vars,implicit-arrow-linebreak
  (dispatch) => {
    fetch('http://127.0.0.1:3000/')
      .then((response) => response.json()).then(
        (data) => {
          dispatch(addMessage(data.message));
        },
      );
  };

// eslint-disable-next-line default-param-last
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
