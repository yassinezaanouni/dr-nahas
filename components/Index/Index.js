import Testimonial from "../Testimonial/Testimonial";
import AboutMe from "./AboutMe/AboutMe";
import Hero from "./Hero/Hero";
import Hours from "./Hours/Hours";
import ServicesCards from "./Services/ServicesCards";
import Treatment from "./Treatment/Treatment";

const Index = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <ServicesCards />
      <Treatment />
      <Hours />
      <Testimonial />
    </div>
  );
};

export default Index;
