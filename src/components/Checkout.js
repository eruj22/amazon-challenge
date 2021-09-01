import React from "react"
import { useStateValue } from "../utils/StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"

function Checkout() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/associates/VXD168-evergreenAssociateAds-lifestyle-assoc-728x90"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item, index) => {
            const { id, title, image, price, rating } = item
            return (
              <CheckoutProduct
                key={index}
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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
