import NavbarLogin from "./components/header";
import Dashboard from "./components/dashboard";
import Footer from "../components/footer";

const Screen = () => {
  return (
    <>
      <NavbarLogin dashboardBgNav='trytygutf'/>
      <Dashboard />
      <Footer />
    </>
  );
};
export default Screen;
