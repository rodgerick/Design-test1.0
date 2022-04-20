import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1> See links below for directions, registry and info on the traditional Filipino prosperity dance that will be taking place.</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/duol0lmxj/image/upload/v1649357284/J_I2_lxfvmo.jpg"
              text="Hailstone Event Center, Deer Hollow Rd, Heber City, UT 84032"
              label="Directions"
              path="/sign-up"
            />
            <CardItem
              src="https://res.cloudinary.com/duol0lmxj/image/upload/v1649357281/J_IV_yxlcs8.jpg"
              text="@Jonathan-Heninger"
              label="Venmo & Registry"
              path="/contact"
            />
            <CardItem
              src="https://res.cloudinary.com/duol0lmxj/image/upload/v1649357280/J_IM_jyigry.jpg"
              text="Learn more about the Prosperity Dance tradition!"
              label="Prosperity Dance"
              path="/about"
            />
          </ul>
        </div>
      </div>
      <small className="website-rights">Rodgerick Heninger &#169; 2022</small>
    </div>
  );
}

export default Cards
