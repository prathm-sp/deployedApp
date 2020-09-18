export const initialState = {
    basket: [],
    user:null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'Add-to-basket':
        return {
            ...state,
            basket:[...state.basket , action.item]
        }
            break;
        case 'Remove from basket':
        return state
            break;
        default:
            return state;
            break;
    }
}

export default reducer