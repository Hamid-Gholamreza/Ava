// const initialState = {
//     status: 'isClosed',
//     typeOfDropdown: 'account',
// }


// export default (state = initialState , action) => {

//     if (action.type === 'updateDropdown') {
//         console.log(action.payload.typeOfDropdown);
//         let newState = {
//                 open: action.payload.open,
//                 typeOfDropdown: action.payload.typeOfDropdown,
//                 }
//             return newState;
//         }
//         return state;
//     }

// reducer.js

// Initial state
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
      // Other actions specific to your dropdowns (if any)
      default:
        return state;
    }
  };
  
  export default dropdownReducer;
  