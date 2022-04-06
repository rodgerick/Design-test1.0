import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
      <h1> DESTINATIONS </h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate."
              label="Location"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-5.jpg?raw=true"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate."
              label="Venmo"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-2.jpg?raw=true"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate."
              label="Registry"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, quam eu commodo vulputate, augue erat molestie nunc, a vulputate. "
              label="Money thing that you talked about"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
