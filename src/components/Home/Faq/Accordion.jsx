import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="px-5 rounded-md mb-4 cursor-pointer" onClick={onToggle}>
      <div className="flex justify-between items-center p-2.5 bg-primary-white hover:text-primary-navy font-bold text-sm md:text-base">
        <button className="font-semibold">{title}</button>
        {isOpen ? (
          <button className="text-sm">
            <FaChevronUp />
          </button>
        ) : (
          <button className="text-sm">
            <FaChevronDown />
          </button>
        )}
      </div>
      {isOpen && <div className="p-2.5">{children}</div>}
    </div>
  );
};

export default Accordion;
