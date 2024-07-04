import Appointment from "../components/Home/Appointment";
import Banner from "../components/Home/Banner";
import Faq from "../components/Home/Faq/Faq";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import Service from "../components/Home/Service";
import Testimonial from "../components/Home/Testimonial";
import WhoWeAre from "../components/Home/WhoWeAre";

const Home = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <NavBar />
          <Banner />
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
