import Navbar from "./Navbar";
import Footer1 from "./Footer1";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> <div> {children}<Footer1/> </div>
    </>
  );
};

export default Layout;
