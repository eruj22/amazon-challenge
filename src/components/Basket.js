import React from "react"
import { useStateValue } from "../utils/StateProvider"
import Product from "./Product"
import Subtotal from "./Subtotal"

function Basket() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue([])

  const arrayUniqueByKey = [
    ...new Map(basket.map((item) => [item.id, item])).values(),
  ]

  let arrayOfDifferentItems = []
  for (let i = 0; i < arrayUniqueByKey.length; i++) {
    const count = basket.filter(
      (obj) => obj.id === arrayUniqueByKey[i].id
    ).length
    arrayOfDifferentItems.push(count)
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/associates/VXD168-evergreenAssociateAds-lifestyle-assoc-728x90"
          alt=""
        />

        <div>
          <h3 className="checkout__greeting">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {arrayUniqueByKey.map((item, index) => {
            const { id, title, image, price, rating } = item
            return (
              <Product
                amount={arrayOfDifferentItems[index]}
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
                product={"checkout"}
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

export default Basket
