import { TbArrowUpRight } from "react-icons/tb";
const YellowButton = ({ title }) => {
  return (
    <button className="text-xs sm:text-base font-medium inline-flex items-center gap-2 rounded-xl bg-primary-yellow px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-navy border border-transparent  capitalize">
      {title}
      <TbArrowUpRight className="w-6 h-6" />
    </button>
  );
};

export default YellowButton;
