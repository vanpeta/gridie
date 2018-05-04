export default function(state = "", action) {
  switch (action.type) {
    case "UPDATE_CODE":
      return action.payload;
    default:
  }
  return state;
}
