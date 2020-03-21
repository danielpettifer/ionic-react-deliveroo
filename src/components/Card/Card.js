import React from 'react';
import './Card.css';

const Card = props => (
  <div 
    className="Card"
    style={{ backgroundImage: `url('${props.img}')` }}>
      <h3>{props.title}</h3>
  </div>
)

export default Card;
