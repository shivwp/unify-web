import React from "react";

const ResetPass = () => {
  return (
    <>
      <div className="bg_body">
        <div className="reset_pass_container">
          <div className="heading">New Password</div>
          <div className="pass_inputs">
            <div className="pass_inp">              
            <label htmlFor="email">Enter New Password</label>
              <input type="password" placeholder="********"  />
            </div>
            <div className="pass_inp">              
            <label htmlFor="email">Confirm New Password</label>
              <input type="password" placeholder="********" />
            </div>
          </div>
          <div className="reset_pass_btn">
            <button>UPDATE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
