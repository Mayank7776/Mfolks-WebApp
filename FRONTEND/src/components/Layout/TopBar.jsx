import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";

const TopBar = () => {
  return (
    <div className="bg-[#60cabaf1] text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="hidden md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-8 w-8" />
          </a>
        </div>
        <div className="text-sm ml-6 lg:ml-14 md:text-center lg:text-center flex-grow">
          <span className="font-extrabold">We Ship WorldWide</span>
        </div>
        <div className="text-sm mr-4">
          <a
            href="tel:+919354831090"
            className="flex items-center gap-1 font-semibold text-white"
          >
            <LuPhoneCall className="h-5 w-5" />
            +91 9354831090
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
