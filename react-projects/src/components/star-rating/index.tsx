import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import "./style.css";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating-container">
      <h2 className="star-rating-heading">Star Rating</h2>
      <div className="star-rating">
        {[...Array(numberOfStars)].map((_, index) => {
          index += 1;
          const isHalfStar = index === Math.ceil(rating) && rating % 1 !== 0; // Check if it's a half-star
          return (
            <div key={index}>
              {isHalfStar ? (
                <FaStarHalfAlt
                  className={index <= rating ? "active" : "inactive"}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={40}
                />
              ) : (
                <FaStar
                  className={index <= (hover || rating) ? "active" : "inactive"}
                  onClick={() => handleClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  size={40}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
