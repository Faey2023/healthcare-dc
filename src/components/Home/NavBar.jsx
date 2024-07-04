import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoD from "../../assets/Images/logo dark.png";
import logoL from "../../assets/Images/logo light.png";
import { TbArrowUpRight } from "react-icons/tb";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 ">
      <div className="bg-primary-white text-primary-navy max-w-6xl mx-auto flex items-center justify-between p-2">
        <img src={logoD} />
        <div className="hidden md:flex items-center space-x-4">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#blog" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </div>
        <div className="hidden md:block">
          <button className="text-xs sm:text-base font-medium capitalize inline-flex items-center gap-2 rounded-xl border border-primary-navy px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-navy hover:text-primary-navy hover:bg-primary-yellow hover:border-none ">
            appointment <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 right-0 bg-primary-navy text-primary-white w-64 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden px-5`}
      >
        <div className="text-right p-4 border-b border-primary-white">
          {/* <img src={logoL} /> */}
          <button onClick={toggleSidebar}>
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#blog" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
          <button className="text-xs sm:text-base font-medium capitalize inline-flex items-center gap-2 rounded-xl border border-primary-navy px-2 py-1 sm:py-3 sm:pr-4 sm:pl-6 text-primary-navy hover:text-primary-navy hover:bg-primary-yellow hover:border-none">
            appointment <TbArrowUpRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
