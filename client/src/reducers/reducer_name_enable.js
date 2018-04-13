export default function(state = false, action) {
  console.log("reducer action=", action);
  switch (action.type) {
    case "ENABLE_NAME":
      return action.payload;
    default:
  }
  return state;
}
