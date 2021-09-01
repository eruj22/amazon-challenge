import React from "react"
import { currencyFormat } from "../utils/helpers"
import { getBasketTotal } from "../utils/reducer"
import { useStateValue } from "../utils/StateProvider"

function Subtotal() {
  const [state, dispatch] = useStateValue()
  const { basket } = state

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{" "}
        <strong>$ {currencyFormat(getBasketTotal(basket))}</strong>
      </p>
      <div className="subtotal__gift">
        <input type="checkbox" />
        <small>This order contains a gift</small>
      </div>
      <button className="button button--yellow subtotal__button">
        Proceed to Checkout
      </button>
    </div>
  )
}

export default Subtotal
