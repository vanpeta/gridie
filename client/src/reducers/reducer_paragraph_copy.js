export default function(state = "", action) {
  switch (action.type) {
    case "UPDATE_PARAGRAPH_COPY":
      return action.payload;
    default:
  }
  return state;
}