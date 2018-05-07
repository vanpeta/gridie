export default function (state = null, action) {
    switch (action.type) {
      case 'CLEAN_URL':
        return action.payload;
      default:
    }
    return state;
  }