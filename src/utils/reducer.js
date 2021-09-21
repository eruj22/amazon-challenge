export const initialState = {
  basket: [],
  user: null,
}

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      }

    case "REMOVE_ITEM_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id)
      let newBasket = [...state.basket]

      newBasket.splice(index, 1)

      return {
        ...state,
        basket: newBasket,
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }

    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default reducer
