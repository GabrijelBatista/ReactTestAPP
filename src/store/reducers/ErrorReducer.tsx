interface State {
  error: string | null;
}

const initialState = {
  error: null
};

type errorAction = {
  type: string;
  payload: string;
};

const reducer = (state: State = initialState, action: errorAction) => {
  switch (action.type) {
    case "ADD_ERROR":
      return { error: action.payload };
    case "REMOVE_ERROR":
      return { error: null };
    default:
      return state;
  }
};

export default reducer;
