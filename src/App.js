import React, { useEffect } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Checkout from "./components/Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import { auth } from "./services/firebase"
import { useStateValue } from "./utils/StateProvider"

function App() {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is", authUser)

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
  }, [])

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
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
