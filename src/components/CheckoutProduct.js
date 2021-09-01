import React from "react"
import Rating from "@material-ui/lab/Rating"
import { useStateValue } from "../utils/StateProvider"

function CheckoutProduct({ id, image, title, price, rating, index }) {
  const [state, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="checkoutProduct__rating">
          <Rating name="read-only" value={rating} precision={0.5} readOnly />
        </div>

        <button className="button" onClick={removeFromBasket}>
          Remove from the basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
