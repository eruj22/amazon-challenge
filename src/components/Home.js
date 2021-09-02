import React from "react"
import Product from "./Product"

function Home({ data }) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg"
          alt=""
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
