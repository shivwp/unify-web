import React from "react";

const Rating = ({ rating }) => {
  const printStars = (number) => {
    let stars = "";

    for (let i = 0; i < number; i++) {
      stars = `${stars} <i className="fa fa-star text-primary"></i>`;
    }
    for (let j = 0; j < 3 - rating; j++) {
      stars = `${stars} <i className="fa fa-star text-secondary"></i>`;
    }
    return stars;
  };

  return (
    <span
      style={{ fontSize: "10px" }}
      className="my-1"
      dangerouslySetInnerHTML={{
        __html: printStars(rating),
      }}
    ></span>
  );
};

export default Rating;
