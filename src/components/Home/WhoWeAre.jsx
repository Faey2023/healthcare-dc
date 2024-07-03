import YellowButton from "../Shared/Button/YellowButton";
import img from "../../assets/Images/Rectangle 24.png";
const WhoWeAre = () => {
  return (
    <div className=" my-10 text-primary-navy flex gap-36">
      <div className="w-2/5 space-y-10">
        <span className=" border border-primary-navy  py-2 px-4 rounded-full">
          Who We Are
        </span>
        <h1 className="text-4xl font-semibold">
          We Help To Get <br /> Solutions
        </h1>
        <p>
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <YellowButton title={"learn more"} />
      </div>
      <div className="relative">
        <img src={img} alt="" className="" />
        <div className="absolute w-[410px] h-48 -left-28 -bottom-1 bg-secondary-navy text-primary-white rounded-[32px] p-10 space-y-3">
          <h1 className="text-2xl font-medium">Our mission is simple</h1>
          <p>
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
