import React from "react"
import Product from "./Product"

// TODO: fetch data from external api - mock ecommerce

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={123385430}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.55}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4.5}
          />
          <Product
            id={859312059}
            title="Greenlights"
            price={15.74}
            image="https://m.media-amazon.com/images/I/41JMH+5JNCL.jpg"
            rating={3.5}
          />
        </div>

        <div className="home__row">
          <Product
            id={943920322}
            title="Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
            price={10.99}
            image="https://m.media-amazon.com/images/I/71nDX36Y9UL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id={904869707}
            title="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, Dark Gray, 6-Ft"
            price={12.99}
            image="https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_SX522_.jpg"
            rating={4}
          />
          <Product
            id={960492047}
            title="Amazon Basics 6 Piece Performance Bath Towels Set - Hydro Blue "
            price={28.99}
            image="https://m.media-amazon.com/images/I/910-yH98-kL._AC_SY450_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={475923444}
            title="LG 34WP65G-B 34-Inch 21:9 UltraWide Full HD (2560 x 1080) IPS Display with VESA DisplayHDR 400 and AMD FreeSync with Height and tilt Adjustable Stand - Black "
            price={296.99}
            image="https://m.media-amazon.com/images/I/91jr7ROnEwL._AC_SY450_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
