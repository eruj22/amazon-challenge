import React from "react"
import { currencyFormat } from "../utils/helpers"
import { getBasketTotal } from "../utils/reducer"
import { useStateValue } from "../utils/StateProvider"
import { useHistory } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast"

function Subtotal() {
  let history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue([])

  const onCLickGoToCheckout = (e) => {
    if (basket.length > 0) {
      history.push("/checkout")
    } else if (basket.length === 0) {
      toast.error("Add items to continue")
    }

    if (!user) {
      history.push("/login")
    }
  }

  return (
    <>
      <Toaster />
      <div className="subtotal">
        <p>
          Subtotal ({basket.length} items):{" "}
          <strong>$ {currencyFormat(getBasketTotal(basket))}</strong>
        </p>
        <div className="subtotal__gift">
          <input type="checkbox" />
          <small>This order contains a gift</small>
        </div>
        <button
          className="button button--yellow subtotal__button"
          onClick={onCLickGoToCheckout}
        >
          Proceed to Checkout
        </button>
      </div>
    </>
  )
}

export default Subtotal
