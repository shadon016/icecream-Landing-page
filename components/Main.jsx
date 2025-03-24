import Content from "./content";
import Images from "./image";
import Nav from "./nav";
import Product from "@/components/product.jsx";
import About from "@/components/about.jsx";
import Footer from "@/components/footer.jsx";

const Main = () => {
  return (
    <div className=" relative -z-20">
      <div className="sticky top-0">
        <Nav />
      </div>
      <div className="flex flex-col-reverse md:flex-row px-8 md:px-0 bg-[#F0A8D0] ">
        <div className="flex-1">
          <Content />
        </div>
        <div className="flex-1">
          <Images />
        </div>
      </div>
      <Product />
      <About />
    </div>
  );
};

export default Main;
