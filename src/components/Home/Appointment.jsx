import bgImg from "../../assets/Images/Rectangle 32.png";
import logo from "../../assets/Images/logo light.png";
import "../../assets/style/style.css";
import YellowButton from "../Shared/Button/YellowButton";
import WhiteButton from "../Shared/Button/WhiteButton";

const Appointment = () => {
  return (
    <div className="relative max-h-[470px] mt-10 text-primary-white">
      <img
        src={bgImg}
        alt="Background Image"
        className="absolute h-full w-full object-cover rounded-[32px]"
      />
      <div className="absolute h-full w-full gradient-overlay rounded-[32px]" />
      <div className="relative">
        <img
          className="absolute right-8 top-10 md:top-16"
          src={logo}
          alt="logo-light"
        />
      </div>
      <div className="relative px-5 md:px-16 py-20">
        <h1 className="text-2xl md:text-[40px] font-semibold w-1/3 leading-[60px]">
          Get Your First Appointment at 50% Off!
        </h1>
        <div className="mt-5 flex gap-5 ">
          <YellowButton title={"appointment"} />
          <WhiteButton title={"learn more"} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
