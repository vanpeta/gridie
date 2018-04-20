export default function(state = false, action) {
  console.log("reducer action=", action);
  switch (action.type) {
    case "ENABLE_HERO":
      return action.payload;
    default:
  }
  return state;
}
