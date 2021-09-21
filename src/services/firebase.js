/* eslint-disable no-unused-vars */
import firebase from "firebase/app"
import firestore from "firebase/firestore"
import auth from "firebase/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB_wL9XegPNk5WbmpLWGNT2X-SModtjMCQ",
  authDomain: "clone-7ca77.firebaseapp.com",
  projectId: "clone-7ca77",
  storageBucket: "clone-7ca77.appspot.com",
  messagingSenderId: "63142077981",
  appId: "1:63142077981:web:a5946d3f35e87aa712c8f4",
})

const db = firebaseApp.firestore()
const authentication = firebase.auth()

export { db, authentication as auth }
