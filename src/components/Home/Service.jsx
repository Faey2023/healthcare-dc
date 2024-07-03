import img from "../../assets/Images/Rectangle 27-2.png";
import img2 from "../../assets/Images/Rectangle 27-1.png";
import img3 from "../../assets/Images/Rectangle 27.png";
import { TbArrowUpRight } from "react-icons/tb";

import YellowButton from "../Shared/Button/YellowButton";
const Service = () => {
  return (
    <>
      <div className=" my-20 text-primary-navy flex flex-col-reverse md:flex-row gap-36">
        <div className="w-2/5 space-y-10">
          <span className=" border border-primary-navy  py-2 px-4 rounded-full">
            Service
          </span>
          <h1 className="text-4xl font-semibold">
            Empowering Health, <br /> Enriching Lives
          </h1>
          <p>
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <YellowButton title={"appointment"} />
        </div>
        <div className="relative">
          <img src={img} alt="" className="rounded-[24px]" />
          <div className="absolute w-[321px] h-36 bg-primary-navy opacity-60 text-primary-white rounded-[32px] p-5 space-y-3 bottom-4 left-4">
            <h1 className="text-xl font-medium">Our mission is simple</h1>
            <div className="flex">
              <p className="text-sm">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
              <button className="rounded-full w-12 h-8 bg-primary-yellow p-2 text-primary-white">
                <TbArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="relative">
          <img src={img2} alt="" className="rounded-[24px]" />
          <div className="absolute w-[321px] h-36 bg-primary-navy opacity-60 text-primary-white rounded-[32px] p-5 space-y-3 bottom-4 left-4">
            <h1 className="text-xl font-medium">Online Doctor Meet</h1>
            <div className="flex">
              <p className="text-sm">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <button className="rounded-full w-12 h-8 bg-primary-yellow p-2 text-primary-white">
                <TbArrowUpRight />
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={img3} alt="" className="rounded-[24px]" />
          <div className="absolute w-[321px] h-36 bg-primary-navy opacity-60 text-primary-white rounded-[32px] p-5 space-y-3 bottom-4 left-4">
            <h1 className="text-xl font-medium">Consultancy your health</h1>
            <div className="flex justify-between items-center">
              <p className="text-sm">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <button className="rounded-full w-12 h-8 bg-primary-yellow p-2 text-primary-white flex justify-center items-center">
                <TbArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
