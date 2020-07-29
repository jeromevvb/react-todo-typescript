const initialState = {
  todos: [],
};

interface TodosState {
  todos: string[];
}

type Action = { type: "ADD_TODO"; payload: string };

export default (state: TodosState = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;
      break;

    default:
      return state;
      break;
  }
};
