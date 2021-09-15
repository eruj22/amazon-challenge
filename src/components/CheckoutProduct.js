import React from "react"
import Rating from "@material-ui/lab/Rating"
import { useStateValue } from "../utils/StateProvider"
import { GrAdd } from "react-icons/gr"
import { MdRemove } from "react-icons/md"

function CheckoutProduct({ id, image, title, price, rating, amount }) {
  const [state, dispatch] = useStateValue([])

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    })
  }

  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_ITEM_FROM_BASKET",
      id: id,
    })
  }

  const addItemToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
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
          <Rating
            name="read-only"
            value={rating.rate}
            precision={0.1}
            readOnly
          />
        </div>

        <button className="button" onClick={removeFromBasket}>
          Remove from the basket
        </button>
        <p className="checkoutProduct__amount">
          Amount of items:{" "}
          <button className="button--remove" onClick={removeItemFromBasket}>
            <MdRemove />
          </button>{" "}
          <span className="checkoutProduct__amount--span">{amount}</span>{" "}
          <button className="button--add" onClick={addItemToBasket}>
            <GrAdd />
          </button>
        </p>
      </div>
    </div>
  )
}

export default CheckoutProduct
