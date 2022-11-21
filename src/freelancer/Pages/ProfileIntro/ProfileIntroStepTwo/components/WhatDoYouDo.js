import React from "react";

const WhatDoYouDo = () => {
  return (
    <>
      <div className="container">
        <div className="container_border">
          <div className="whatdoyoudo">
            <div className="heading">
              Got it. Now, add a title to tell the world what do you do.
            </div>
            <div className="desc">
              It's the very first thing clients see, so make it count. Stand out
              by describing your expertise in your own words.
            </div>
            <div className="search_category">
              <input
                type="text"
                placeholder="ex. Full Stack Developer | Web & Mobile"
                name=""
                id=""
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.5"
                height="33.667"
                viewBox="0 0 33.5 33.667"
              >
                <g id="magnifying-glass" transform="translate(-0.898)">
                  <g
                    id="Group_2490"
                    data-name="Group 2490"
                    transform="translate(22.524 21.681)"
                  >
                    <g id="Group_2489" data-name="Group 2489">
                      <path
                        id="Path_4513"
                        data-name="Path 4513"
                        d="M236.069,232.949a15.981,15.981,0,0,1-2.814,2.8l9.044,9.184,2.829-2.786Z"
                        transform="translate(-233.255 -232.949)"
                        fill="#6d2ef1"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_2492"
                    data-name="Group 2492"
                    transform="translate(0.898)"
                  >
                    <g
                      id="Group_2491"
                      data-name="Group 2491"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_4514"
                        data-name="Path 4514"
                        d="M12.811,0A11.913,11.913,0,1,0,24.725,11.913,11.913,11.913,0,0,0,12.811,0Zm0,19.856a7.942,7.942,0,1,1,7.942-7.942A7.942,7.942,0,0,1,12.811,19.856Z"
                        transform="translate(-0.898)"
                        fill="#6d2ef1"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="theme_btns">
              <button className="first_button">Back</button>
              <button className="second_button">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDoYouDo;
