import produce from "immer";

const initialState = {
  id: null,
  name: "",
  cost: 0,
  consists_of: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_BURGER": {
      return action.payload;
    }
    default:
      return state;
  }
}
