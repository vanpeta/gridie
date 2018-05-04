export default function(state = { copy: "", biggerTitle: false}, action) {
  console.log("reducer action=", action);
  switch (action.type) {
    case "UPDATE_TITLE":
      return action.payload;
    default:
  }
  return state;
}
