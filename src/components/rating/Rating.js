import React from "react";

const Rating = ({ rating }) => {
  const printStars = (number) => {
    let stars = "";

    for (let i = 0; i < number; i++) {
      stars = `${stars} <i class="fa fa-star text-primary"></i>`;
    }
    for (let j = 0; j < 5 - rating; j++) {
      stars = `${stars} <i class="fa fa-star text-secondary"></i>`;
    }
    return stars;
  };

  return (
    rating != 0 && (
      <span
        style={{ fontSize: "10px" }}
        className="my-1"
        dangerouslySetInnerHTML={{
          __html: printStars(rating),
        }}
      ></span>
    )
  );
};

export default Rating;
