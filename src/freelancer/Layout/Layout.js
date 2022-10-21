import FreelanceHeader from "./Header/NavbarHeader";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <FreelanceHeader dashboardBgNav={props.dashboardBgNav} />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
