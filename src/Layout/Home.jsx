import Appointment from "../components/Home/Appointment";
import Footer from "../components/Home/Footer";
import Service from "../components/Home/Service";
import WhoWeAre from "../components/Home/WhoWeAre";

const Home = () => {
  return (
    <>
      <div className=" max-w-[1160px] mx-auto">
        <WhoWeAre />
        <Service />
        <Appointment />
      </div>
      <Footer />
    </>
  );
};

export default Home;
