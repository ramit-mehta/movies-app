export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
