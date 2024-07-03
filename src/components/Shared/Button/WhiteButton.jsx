import { TbArrowUpRight } from "react-icons/tb";
const WhiteButton = ({ title }) => {
  return (
    <button className="text-xs sm:text-base font-medium capitalize inline-flex items-center gap-2 rounded-xl border border-primary-white px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-white hover:text-primary-navy hover:bg-primary-yellow hover:border-none">
      {title} <TbArrowUpRight className="w-6 h-6" />
    </button>
  );
};

export default WhiteButton;
