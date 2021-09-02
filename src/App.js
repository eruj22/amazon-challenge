import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import { auth } from "./services/firebase"
import { useStateValue } from "./utils/StateProvider"
import Payment from "./components/Payment"

function App() {
  const [state, dispatch] = useStateValue()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
    setIsLoading(false)
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="loader__container">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home data={data} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
