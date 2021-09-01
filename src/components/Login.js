import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../services/firebase"

function Login() {
  let history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        history.push("/")
      })
      .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log(userCredentials)
        if (userCredentials) {
          history.push("/")
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="button--yellow login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>

          <p>
            By continuing, you agree to Amazon Fake Clone's Conditions of Use
            and Privacy Notice.
          </p>

          <button
            className="login__registerButton"
            type="submit"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
