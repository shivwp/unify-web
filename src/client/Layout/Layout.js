import ClientHeader from "./Header/NavbarHeader";
import Footer from "./Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <ClientHeader dashboardBgNav={props.dashboardBgNav} />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
