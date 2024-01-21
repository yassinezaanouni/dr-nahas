import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, dir }) => {
  return (
    <div dir={dir} className="dirDiv">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
