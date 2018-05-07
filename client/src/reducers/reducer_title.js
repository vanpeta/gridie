export default function(state = "", action) {
  switch (action.type) {
    case "UPDATE_TITLE":
      return action.payload;
    default:
  }
  return state;
}
