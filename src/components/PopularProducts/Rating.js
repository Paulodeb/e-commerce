import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar color='yellow' key={i} />);
      } else {
        stars.push(<FaStar color='yellow'  className="text-muted" key={i} />);
      }
    }
    return (
      <div>
        {stars}
      </div>
    );
  };
  
  export default Rating;
  
  
  
  