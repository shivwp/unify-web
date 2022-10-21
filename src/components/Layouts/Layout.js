import FreelanceHeader from "./Header/Freelancer/NavbarHeader";
import ClientHeader from "./Header/Client/NavbarHeader";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      {props.webtype === "client" ? (
        <ClientHeader dashboardBgNav={props.dashboardBgNav} />
      ) : (
        <FreelanceHeader dashboardBgNav={props.dashboardBgNav} />
      )}
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
