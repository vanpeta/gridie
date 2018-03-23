export default function(state = null, action) {
  switch (action.type) {
    case "NUMBER_OF_PRODUCTS":
      return action.payload;
    default:
  }
  return state;
}