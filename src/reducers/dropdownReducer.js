const initialState = {
    accountDropdown: { status: false },
    languageDropdown: { status: false },
  };
  
  const dropdownReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'updateDropdown':
        const { dropdownId } = action.payload;
        return {
          ...state,
          [dropdownId]: {
            ...state[dropdownId],
            status: !state[dropdownId].status,
          },
        };
      default:
        return state;
    }
  };
  
  export default dropdownReducer;