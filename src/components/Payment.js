import React from "react"
import { Link } from "react-router-dom"
import { useStateValue } from "../utils/StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Payment() {
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
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__title">
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>street number</p>
            <p>city</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {arrayUniqueByKey.map((item, index) => {
              const { id, title, image, price, rating } = item
              return (
                <CheckoutProduct
                  amount={arrayOfDifferentItems[index]}
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

        <div className="payment__section">
          <div className="payment__sectionTitle">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">{/* stripe method */}</div>
        </div>
      </div>
    </div>
  )
}

export default Payment
