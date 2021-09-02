import React from "react"
import Rating from "@material-ui/lab/Rating"
import { useStateValue } from "../utils/StateProvider"

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <Rating
            name="read-only"
            value={rating.rate}
            precision={0.1}
            readOnly
          />
          <small>
            (<b>{rating.rate}</b> out of {rating.count})
          </small>
        </div>
      </div>
      <img src={image} alt="" />
      <button className="button button--orange" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  )
}

export default Product
