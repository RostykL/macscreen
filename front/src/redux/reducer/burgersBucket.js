import produce from "immer";

const initialState = {
  isLoading: true,
  error: "",
  burgers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_BURGER_BUCKET": {
      return produce(state, (draftState) => {
        if (Array.isArray(action.payload)) {
          draftState.burgers.push(...action.payload);
        } else {
          draftState.burgers.push(action.payload);
        }
      });
    }
    case "REMOVE_BURGERS_BUCKET": {
      return produce(state, (draftState) => {
        draftState.burgers = []
      });
    }
    case "REMOVE_ONE_BURGER_BUCKET": {
      return produce(state, (draftState) => {
        draftState.burgers = draftState.burgers.filter(el => el.id !== action.payload)
      })
    }
    default:
      return state;
  }
}
