import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 px-4 lg:px-0">
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Address</h3>
          <p className="text-gray-500 mb-4">
            Mfolks Industries Private Limited
            <br />
            10134, Model Basti Industrial Area, East Park Road, Central Delhi,
            Karol Bagh, New Delhi - 110005, Delhi, India
          </p>
          <p className="font-medium text-sm text-gray-600">
            SignUp to get 10% off.
          </p>

          {/* NewsLetter */}
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b text-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Products</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Aluminium Wire
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Aluminium Wire Rod
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Mig Wires
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Winding Wire
              </Link>
            </li>
          </ul>
        </div>
        {/* support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Features
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 tracking-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-gray-600"
            >
              <BiLogoFacebookSquare className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-gray-600"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
              className="hover:text-gray-600"
            >
              <FaXTwitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2" /> +91 9354831090
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          ©️ 2025 MFOLKS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
