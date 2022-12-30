import React from "react";
import Layout from "../../../Layout/Layout";

const ViewOriginalOffer = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="col-lg-9">
            <div className="view_original_offer">
              <div className="top_heading">Offer</div>
              <div className="offer_details">
                <div className="heading">
                  This offer is not available anymore
                </div>
                <div className="desc">
                  You have accepted this offer on Oct 15, 2021
                </div>
                <div className="project_name">
                  Graphic Design Logo design for companies and the brand
                </div>
                <div className="description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer...
                </div>
                <div className="more">More</div>
                <div className="client">
                  <div className="image">
                    <img src="/assets/PRO-03.jpg" alt="" />
                    <div className="about">
                      <div className="name">Jolly</div>
                      <div className="about_client">
                        United States - Wed 8:10
                      </div>
                    </div>
                  </div>
                  <div className="view_contract_btn">View Contract</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ViewOriginalOffer;
