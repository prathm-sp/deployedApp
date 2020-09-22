export const initialState = {
    basket: [],
    productDetails: [],
    user: null
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'Add-to-basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'Product-Details':
            return {
                ...state,
                productDetails: [action.item]
            }
            break;
        default:
            return state;
            break;
    }
}

export default reducer