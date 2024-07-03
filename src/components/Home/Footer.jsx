import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logo from "../../assets/Images/logo light.png";
const Footer = () => {
  return (
    <div className="bg-primary-navy text-primary-white p-10 md:p-20 w-full">
      <img src={logo} alt="logo-dark" className="md:px-24 py-5 md:py-0" />
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="space-y-3 md:space-y-8 md:p-10">
          <p>
            123 Main Street Anytown,
            <span className="block">USA Postal Code: 12345</span>
          </p>
          <p>
            Support:support@oyolloo.com
            <span className="block"> (Available : 10:00am to 07:00pm)</span>
          </p>
        </div>
        <div className="md:p-10 p-5 hidden md:flex">
          <ul className="text-sm font-semibold space-y-3">
            <li>Home</li>
            <li>About Us </li>
            <li>Success</li>
            <li>Page</li>
            <li> Terms And Condition</li>
          </ul>
        </div>
        <div className="md:p-10 p-5 hidden md:flex">
          <ul className="text-sm font-semibold space-y-5">
            <li>Services</li>
            <li>Scheduling</li>
            <li>Contact Us</li>
            <li>Patient Portal</li>
          </ul>
        </div>
        <div className="flex md:hidden p-5">
          <ul className="md:text-sm font-semibold space-y-3">
            <li>Home</li>
            <li>About Us </li>
            <li>Success</li>
            <li>Page</li>
            <li> Terms And Condition</li>
          </ul>
          <ul className="md:text-sm font-semibold space-y-5">
            <li>Services</li>
            <li>Scheduling</li>
            <li>Contact Us</li>
            <li>Patient Portal</li>
          </ul>
        </div>
        <div className="md:p-10">
          <h3 className="text-lg w-full sm:text-center md:text-start md:text-sm font-semibold">
            Follow Us
          </h3>
          <div className="flex justify-center items-center gap-4 mt-5 mb-10">
            <button>
              <FaFacebook className="w-6 h-6" />
            </button>
            <button>
              <FaInstagram className="w-6 h-6" />
            </button>
            <button>
              <FaLinkedin className="w-7 h-7" />
            </button>
            <button>
              <FaYoutube className="w-6 h-6" />
            </button>
          </div>
          <p>@DocPlus 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
