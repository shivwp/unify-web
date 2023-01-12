const StarRating = ({ rating, setStarRating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <>
          {" "}
          <span className="client_review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.378"
              height="23.437"
              viewBox="0 0 24.378 23.437"
            >
              <path
                id="star"
                d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                transform="translate(1.023 0.504)"
                fill="#ff88fe"
                stroke="#ff88fe"
                strokeWidth="2"
              />
            </svg>
          </span>
        </>
      );
    } else {
      stars.push(
        <>
          <span className="client_review">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.378"
              height="24.378"
              viewBox="0 0 24.378 23.437"
            >
              <path
                id="star"
                d="M22.275,8.583a1.185,1.185,0,0,0-1.021-.815l-6.447-.585L12.259,1.217a1.187,1.187,0,0,0-2.184,0L7.527,7.182l-6.448.585A1.188,1.188,0,0,0,.4,9.845l4.873,4.273L3.841,20.447A1.187,1.187,0,0,0,5.607,21.73l5.559-3.324,5.558,3.324a1.188,1.188,0,0,0,1.767-1.283l-1.437-6.329,4.873-4.273a1.188,1.188,0,0,0,.346-1.262Zm-11,9.759"
                transform="translate(1.023 0.504)"
                fill="none"
                stroke="#ff88fe"
                strokeWidth="2"
              />
            </svg>
          </span>
        </>
      );
    }
  }

  const giveRating = (rate) => {
    setStarRating(rate);
  };
  return (
    <>
      <div className="reviews">
        <div className="stars">
          {stars?.map((item, index) => (
            <span
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => giveRating(index + 1)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default StarRating;
