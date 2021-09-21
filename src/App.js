import React, { useEffect, useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Basket from "./components/Basket"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import { auth } from "./services/firebase"
import { useStateValue } from "./utils/StateProvider"
import Checkout from "./components/Checkout"
import Signup from "./components/Signup"
import Footer from "./components/Footer"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue()
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json)
        // if (data) {
        // }
        setIsLoading(false)
      })
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
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/basket">
            <Header />
            <Basket />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home data={data} isLoading={isLoading} />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
