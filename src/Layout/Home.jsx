import Appointment from "../components/Home/Appointment";
import Faq from "../components/Home/Faq/Faq";
import Footer from "../components/Home/Footer";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";
import WhoWeAre from "../components/Home/WhoWeAre";

const Home = () => {
  return (
    <>
      <div className="max-w-[1160px] mx-auto">
        <WhoWeAre />
        <Service />
        <Testimonial />
        <Faq />
        <Appointment />
      </div>
      <Footer />
    </>
  );
};

export default Home;
