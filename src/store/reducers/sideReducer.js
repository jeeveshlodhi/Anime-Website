const initialState = { 
    side : false
 };

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'change':
            return action.text
        default: return state;
    }
}

export default reducer;
