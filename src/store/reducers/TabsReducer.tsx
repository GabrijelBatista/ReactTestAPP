interface State {
  tabs: object[];
}

const initialState = {
  tabs: []
};

type tabsAction = {
  type: string;
  payload: [];
};

const reducer = (state: State = initialState, action: tabsAction) => {
  switch (action.type) {
    case "ADD_TABS":
      return { tabs: action.payload };
    case "REMOVE_TABS":
      return { tabs: [] };
    default:
      return state;
  }
};

export default reducer;
