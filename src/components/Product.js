import React from "react"
import Rating from "@material-ui/lab/Rating"
import { useStateValue } from "../utils/StateProvider"
import { GrAdd } from "react-icons/gr"
import { MdRemove } from "react-icons/md"
import toast, { Toaster } from "react-hot-toast"

function Product({ id, title, price, rating, image, amount, product }) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue([])

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
    toast(
      (t) => (
        <span>
          Added item to the basket
          <b>
            <button onClick={() => toast.dismiss(t.id)}>X</button>
          </b>
        </span>
      ),
      {
        duration: 2000,
      }
    )
  }

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

  if (product === "checkout") {
    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <div className="checkoutProduct__price">
            <strong>$ {price}</strong>
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

  return (
    <>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <strong>$ {price}</strong>
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
        <img className="product__image" src={image} alt="" />
        <button className="button button--orange" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
      <Toaster
        position="top-right"
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        gutter={24}
      ></Toaster>
    </>
  )
}

export default Product
