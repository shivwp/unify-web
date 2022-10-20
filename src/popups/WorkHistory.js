import { Row, Col } from "react-bootstrap";
const Star = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.754"
        height="12.165"
        viewBox="0 0 12.754 12.165"
      >
        <path
          id="Path_4730"
          data-name="Path 4730"
          d="M8.011,7.947l-4.023.446a.384.384,0,0,0-.321.262.378.378,0,0,0,.107.4c1.2,1.091,2.993,2.725,2.993,2.725s-.493,2.377-.82,3.963a.385.385,0,0,0,.15.386.379.379,0,0,0,.411.021c1.408-.8,3.517-2,3.517-2l3.516,2a.381.381,0,0,0,.562-.408c-.327-1.587-.818-3.964-.818-3.964l2.993-2.723a.385.385,0,0,0,.107-.4.381.381,0,0,0-.321-.26c-1.61-.18-4.024-.447-4.024-.447L10.373,4.259a.386.386,0,0,0-.348-.225.381.381,0,0,0-.346.225C9.011,5.734,8.011,7.947,8.011,7.947Z"
          transform="translate(-3.649 -4.034)"
          fill="#6d2ef1"
        />
      </svg>
    </>
  );
}; 
const CloseIcon = () => {
  return (
    <svg
      fill="#B2B2B2"
      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-1om0hkc"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="CloseIcon"
    >
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
  );
};


const WorkHistory = () => {
    return (
      <>
        <div className="work_historycard">
          <div className="whtroy_head">
            Experienced Developer for Wellenss App
          </div>
          <div className="d-flex star_wbtn_whistory">
            <Star />
            <Star />
            <Star />
            <Star />
            <span>5.00 Oct 29, 2021 - Dec 3, 2021</span>
            <div className="myskill_hdingn m-0">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    id="_3180660_share_sharing_social_icon"
                    data-name="3180660_share_sharing_social_icon"
                    d="M15.906,6.906a3.08,3.08,0,0,0-2.458,1.236l-6.395-3.2a3.051,3.051,0,0,0,.134-.851,3.126,3.126,0,1,0-.636,1.858l6.395,3.2a2.769,2.769,0,0,0,0,1.7l-6.395,3.2a3.078,3.078,0,1,0,.636,1.858,3.052,3.052,0,0,0-.134-.851l6.395-3.2a3.088,3.088,0,1,0,2.458-4.951ZM4.094,6.063A1.969,1.969,0,1,1,6.063,4.094,1.971,1.971,0,0,1,4.094,6.063Zm0,11.813a1.969,1.969,0,1,1,1.969-1.969A1.971,1.971,0,0,1,4.094,17.875Zm11.813-5.906A1.969,1.969,0,1,1,17.875,10,1.971,1.971,0,0,1,15.906,11.969Z"
                    transform="translate(-1 -1)"
                    fill="#6d2ef1"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="whistory_para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing
          </div>
          <div className="d-flex">
            <div className="italic_whistry">$3.000</div>
            <div className="italic_whistry">Fixed Price</div>
          </div>
        </div>
      </>
    );
  };
  export default WorkHistory