export default function(state = null, action) {
  // eslint-disable-next-line
  switch (action.type) {
    case 'UPDATE_LINKS_AND_IMAGES':
      return action.payload;
  }
  return state;
}
