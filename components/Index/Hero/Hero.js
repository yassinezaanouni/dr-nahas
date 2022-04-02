import FloatingInfo from "../../Widgets/Index/FloatingInfo";
import BookAppointment from "./BookAppointment";
import MainHero from "./MainHero";

const Hero = () => {
  return (
    <section>
      <FloatingInfo title={"Disc 50%"} />
      <MainHero />
      <BookAppointment />
    </section>
  );
};

export default Hero;
