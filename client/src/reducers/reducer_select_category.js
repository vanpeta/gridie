export default function(state = null, action) {
  console.log("reducer action=", action);
  switch (action.type) {
    case "SELECT_CATEGORY":
      return action.payload;
    default:
  }
  return state;
}
