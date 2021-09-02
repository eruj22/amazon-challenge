import React from "react"
import { useStateValue } from "../utils/StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>street number</p>
            <p>city</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              const { id, title, image, price, rating } = item
              return (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              )
            })}
          </div>
        </div>

        <div className="payment__section"></div>
      </div>
    </div>
  )
}

export default Payment
