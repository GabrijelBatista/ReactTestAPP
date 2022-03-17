interface State {
  token: string | null;
}

const initialState = {
  token: null
};

type tokenAction = {
  type: string;
  payload: string;
};

const reducer = (state: State = initialState, action: tokenAction) => {
  switch (action.type) {
    case "ADD_TOKEN":
      return { token: action.payload };
    case "REMOVE_TOKEN":
      return { token: null };
    default:
      return state;
  }
};

export default reducer;
