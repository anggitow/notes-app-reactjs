import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="font-nunito bg-base-200 flex min-h-screen flex-col justify-start">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
