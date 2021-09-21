import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../services/firebase"
import { useStateValue } from "../utils/StateProvider"

function Login() {
  let history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue([])

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        if (basket.length > 0) {
          history.push("/basket")
        } else {
          history.push("/")
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="authentication">
      <Link to="/">
        <img
          className="authentication__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="authentication__container">
        <h1 className="authentication__title">Sign-in</h1>
        <form>
          <h5 className="authentication__label">E-mail</h5>
          <input
            className="authentication__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="authentication__label">Password</h5>
          <input
            className="authentication__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="button--yellow authentication__button"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>

          <small className="authentication__terms">
            By continuing, you agree to Amazon Fake Clone's Conditions of Use
            and Privacy Notice.
          </small>

          <p className="authentication__text">
            Don't have an account?
            <Link to="/signup">Sign-up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
