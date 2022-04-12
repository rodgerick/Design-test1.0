import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'
function Cards() {
  return (
    <div className="cards">
      <h1> Information </h1>
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
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate."
              label="Venmo"
              path="/contact"
            />
            <CardItem
              src="https://res.cloudinary.com/duol0lmxj/image/upload/v1649357280/J_IR_s3okgm.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate."
              label="Registry"
              path="/sign-up"
            />
            <CardItem
              src="https://res.cloudinary.com/duol0lmxj/image/upload/v1649357280/J_IM_jyigry.jpg"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate. "
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
