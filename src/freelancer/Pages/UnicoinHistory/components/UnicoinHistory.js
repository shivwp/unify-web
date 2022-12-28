import React from "react";
import { Link } from "react-router-dom";

const UnicoinHistory = () => {
  return (
    <>
      <div className="unicoin_history container">
        <div className="heading_and_filter">
          <div className="heading_and_btn">
            <div className="heading">UniCoins History</div>
            <Link to="/freelancer/buy-unicoins">
              <div className="btn">Buy Unicoins</div>
            </Link>
          </div>
          <div className="row">
            <div className="col-md-6 filter">
              <label htmlFor="unicoin_type">Unicoins Type</label>
              <select>
                <option value="All Unicoins">All Unicoins</option>
              </select>
            </div>
            <div className="col-md-6 filter">
              <label htmlFor="unicoin_type">Date</label>
              <select>
                <option value="last_7_days">Last 7 days</option>
              </select>
            </div>
          </div>
        </div>
        <div className="available">
          <div className="numbers">98</div>
          <div className="heading">Available Balance</div>
        </div>
        <div className="history">
          <div className="day">Today</div>
          <div className="history_row border_bottom">
            <div className="icon">
              <button>-</button>
            </div>
            <div className="about">
              <div className="heading">Available now Badge</div>
              <div className="desc">
                You've been outbid to boost your proposal
              </div>
            </div>
            <div className="status">-1</div>
          </div>
          <div className="history_row ">
            <div className="icon">
              <button>+</button>
            </div>
            <div className="about">
              <div className="heading">
                Build responsive word press site for shipping/courier company
                with package tracking functionality.
              </div>
              <div className="desc">
                You've been outbid to boost your proposal
              </div>
            </div>
            <div className="status">+10</div>
          </div>
        </div>
        <div className="history">
          <div className="day">Tomorrow</div>
          <div className="history_row border_bottom">
            <div className="icon">
              <button>-</button>
            </div>
            <div className="about">
              <div className="heading">Available now Badge</div>
              <div className="desc">
                You've been outbid to boost your proposal
              </div>
            </div>
            <div className="status">-1</div>
          </div>
          <div className="history_row ">
            <div className="icon">
              <button>+</button>
            </div>
            <div className="about">
              <div className="heading">
                Build responsive word press site for shipping/courier company
                with package tracking functionality.
              </div>
              <div className="desc">
                You've been outbid to boost your proposal
              </div>
            </div>
            <div className="status">+10</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnicoinHistory;
