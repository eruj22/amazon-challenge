import React from "react"
import Product from "./Product"
import image from "../assets/background-image.jpg"

function Home({ data }) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={image}
          alt="add for prime video, watch party in beta"
        />

        <div className="home__row">
          {data.map((item) => {
            const { image, price, rating, title, id } = item
            return (
              <Product
                key={id}
                image={image}
                price={price}
                rating={rating}
                title={title}
                id={id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
