import bannerImg from "../../assets/Images/Rectangle 5.png";
import groupImg1 from "../../assets/Images/piechart.jpg";
import groupImg2 from "../../assets/Images/certificate.jpg";
import groupImg3 from "../../assets/Images/coin.jpg";
import groupImg4 from "../../assets/Images/video.jpg";
import groupImg5 from "../../assets/Images/Group 7.jpg";
import "../../assets/style/style.css";
import { FaStar } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="pt-14">
      <div className="relative h-[470px] mt-10 text-primary-white">
        <img src={bannerImg} alt="Background Image" className="h-full w-full" />
        <div className="absolute h-full w-full banner-gradient-overlay rounded-[32px]" />
      </div>
      <div className="relative mt-10 flex gap-2 items-end px-1">
        <div className="flex flex-col space-y-3 bg-[#fbfbfb] border border-[#FBFBFB] rounded-[24px] p-5 w-[216px]">
          <h1 className="text-[40px] text-primary-navy font-semibold">90%</h1>
          <p className="text-sm">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img src={groupImg1} alt="" className="mt-auto" />
        </div>
        <div className="relative flex flex-col space-y-3 bg-[#fbfbfb] border border-[#FBFBFB] rounded-[24px] p-5 w-[216px] h-52">
          <h1 className="text-[40px] text-primary-navy font-semibold">500+</h1>
          <p className="text-sm">Board-certified doctors.</p>
          <img className="absolute right-4 bottom-4" src={groupImg2} alt="" />
        </div>
        <div className="relative flex flex-col space-y-3 bg-[#fbfbfb] border border-[#FBFBFB] rounded-[24px] p-5 w-[216px] h-52">
          <h1 className="text-[40px] inline-flex justify-center items-center gap-3">
            4.8 <FaStar className="text-[#FFE03D]" />
          </h1>
          <p className="text-sm text-secondary-navy">Over 20,000 Patient</p>
          <div className="mt-auto">
            <img src={groupImg5} alt="" />
          </div>
        </div>
        <div className="relative flex flex-col space-y-3 bg-[#fbfbfb] border border-[#FBFBFB] rounded-[24px] p-5 w-[216px] h-60">
          <h1 className="text-[40px] text-primary-navy font-semibold">$5000</h1>
          <p className="text-sm text-secondary-navy">
            Money spent for poor patients
          </p>
          <img className="absolute right-4 bottom-4" src={groupImg3} alt="" />
        </div>
        <div className="relative flex flex-col space-y-3 bg-[#fbfbfb] border border-[#FBFBFB] rounded-[24px] p-5 w-[216px] h-80">
          <h1 className="text-[40px] text-primary-navy font-semibold">50+</h1>
          <p className="text-sm text-secondary-navy">
            Free lesson videos for patients
          </p>
          <img className="mt-auto" src={groupImg4} alt="video image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
