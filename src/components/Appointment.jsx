import bgImg from "../assets/Images/Rectangle 32.png";
import logo from "../assets/Images/logo light.png";
import "../assets/style/style.css";
import { TbArrowUpRight } from "react-icons/tb";

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
      <div className="relative px-5 md:px-16 py-24">
        <h1 className="text-2xl md:text-[40px] font-semibold">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <div className="mt-5 flex gap-5 text-xs sm:text-sm">
          <button className="inline-flex items-center gap-2 rounded-xl bg-primary-yellow px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-navy border border-transparent hover:border-primary-white hover:text-primary-white hover:bg-transparent">
            Appointment <TbArrowUpRight className="w-6 h-6" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-primary-white px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-white hover:text-primary-navy hover:bg-primary-yellow hover:border-none">
            Learn More <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
