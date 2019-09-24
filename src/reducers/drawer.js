function drawerReducer(state = { isOpen: false }, action) {
  switch (action.type) {
    case 'DRAWER_ACTION': {
      console.log('Drawer Reducer');
      console.dir(state);
      return { isOpen: !state.isOpen };
    }
    default:
      return state;
  }
}

export { drawerReducer };
