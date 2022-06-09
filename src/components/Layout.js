import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ handlerSearch, children }) => {
  return (
    <div className="font-nunito bg-base-200 flex min-h-screen flex-col justify-start">
      <Navbar handlerSearch={handlerSearch} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
