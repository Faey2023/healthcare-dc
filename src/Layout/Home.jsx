import Appointment from "../components/Appointment";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="space-y-10">
      <div className=" max-w-[1160px] mx-auto">
        <Appointment />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
