export default function (state = null, action) {
  console.log("reducer action=", action)
  switch (action.type) {
    case 'FETCH_LINKS_IMGS':
      return action.payload;
    default:
  }
  return state;
}