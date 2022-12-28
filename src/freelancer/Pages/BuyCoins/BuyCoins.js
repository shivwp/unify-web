import React from "react";

const BuyCoins = () => {
  return (
    <>
      <div className="container">
        <div className="buy_coins">
          <div className="heading">Buy UniCoins</div>
          <div className="your_coins">
            <div className="count">
              <div className="title">Your available UniCoins</div>
              <div className="numbers">98</div>
            </div>
            <div className="count">
              <div className="title">Your account will be charged</div>
              <div className="numbers">$1.50</div>
            </div>
            <div className="count">
              <div className="title">Your new Unicoins balance will be</div>
              <div className="numbers">101</div>
            </div>
            <div className="count">
              <div className="title">These Unicoins will expire on</div>
              <div className="numbers">December 25, 2022</div>
            </div>
          </div>
          <div className="row buy">
            <div className="col-lg-6 inps">
              <label htmlFor="amt">Select the amount to buy</label>
              <select>
                <option value="10">10 for $1.50</option>
              </select>
            </div>
            <div className="col-lg-6 inps">
              <label htmlFor="amt">Promo Code</label>
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
            </div>
          </div>

          <div className="about_coins">
            This bundle of Unicoins will expire 1 year from today. Unused
            Unicoins rollover to the next month (maximum of 200). <br /> You're
            authorizing Unify to charge your account. If you have sufficient
            funds, we will withdraw from your account balance. If not, the full
            amount will be charged to your primary billing method.
          </div>

          <div className="theme_btns_big">
            <button className="first_button">Cancle</button>
            <button className="second_button">Buy UniCoins</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyCoins;
