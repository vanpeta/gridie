export default function(state = null, action) {
  switch (action.type) {
    case "UPDATE_TOP_CTA":
      return action.payload;
    default:
  }
  return state;
}
