export default function(state = false, action) {
    switch (action.type) {
      case "ENABLE_CATEGORY":
        return action.payload;
      default:
    }
    return state;
  }