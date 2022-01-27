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
              text="Spend Daddy's money and get yourself to the Amazon Jungle!"
              label="Adventure"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-5.jpg?raw=true"
              text="Tell that really old man that you think you love because-he-has-alot-of-money-and-will-hopfully-marry-you-and-die-and-leave-all-his-money-to-you to take you to this five star hotel! "
              label="Sugar Baby"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-2.jpg?raw=true"
              text="Im so happy! &#128513; * 	&#129320; sees plane ticket price* I'm so sad &#x1F616;"
              label="Bank Account Killer"
              path="/sign-up"
            />
            <CardItem
              src="https://github.com/briancodex/react-website-v1/blob/master/public/images/img-9.jpg?raw=true"
              text="Yeah... you'll totally get here one day... Everyone knows that you wont make here before you die. "
              label="Bucket List"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
