import { Link } from "react-router-dom";
import SearchBar from "../Common/SearchBar";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import {
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiBars3BottomRight,
} from "react-icons/hi2";
import CartDrawer from "./CartDrawer";
import { useAuth0 } from "@auth0/auth0-react";
import mfolksLogo from "../../assets/images/mfolks-logo.png";
import SelectWarehouse from "./SelectWarehouse";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [navbarDrawer, setNavbarDrawer] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // Calculate total quantity
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const cartDrawerToggle = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  const navbarDrawerToggle = () => {
    setNavbarDrawer(!navbarDrawer);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Left logo */}
        <div>
          <Link to="/" className="text-2xl font-bold">
            <img
              className="h-10"
              src={mfolksLogo}
              alt="Mfolks-Logo"
              srcSet=""
            />
          </Link>
        </div>
        {/* Center Navigation */}
        <div className="hidden lg:flex space-x-6 lg:ml-30">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Wires
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Rods
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Coil
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Tigwires
          </Link>
        </div>
        {/* Right Cart Icon */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            {isAuthenticated ? (
              <button
                className="text-white font-bold bg-[#60cabaf1] hover:bg-[#47837af1] py-3 px-2 rounded-lg"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <HiOutlineUser className="h-6 w-6" />
                Log Out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="flex flex-row text-white font-bold bg-[#60cabaf1] hover:bg-[#47837af1] py-3 px-2 rounded-lg"
              >
                {" "}
                <HiOutlineUser className="h-5 w-6 mr-0.5 mt-0.5" /> Log In/
                Register
              </button>
            )}
          </div>
          <button
            onClick={cartDrawerToggle}
            className="relative hover:text-black text-gray-700"
          >
            <HiOutlineShoppingCart className="h-6 w-6" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#02caac] text-white rounded-full text-xs px-1 py-0.5 ">
                {totalQuantity}
              </span>
            )}
          </button>
          {/* Search Icon */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>
          <button onClick={navbarDrawerToggle} className="lg:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer
        cartDrawerOpen={cartDrawerOpen}
        cartDrawerToggle={cartDrawerToggle}
      />
      {/* Mobile navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navbarDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={navbarDrawerToggle}>
            <HiMiniXMark className="h-6 w-6 hover:text-black text-gray-700" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Products&Services</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={navbarDrawerToggle}
              className="block text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Wires
            </Link>
            <Link
              to="#"
              onClick={navbarDrawerToggle}
              className="block text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Rods
            </Link>
            <Link
              to="#"
              onClick={navbarDrawerToggle}
              className="block text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Coil
            </Link>
            <Link
              to="#"
              onClick={navbarDrawerToggle}
              className="block text-gray-700 hover:text-black text-sm font-medium uppercase"
            >
              Tigwires
            </Link>
            <SelectWarehouse />
            <br />
            {isAuthenticated ? (
              <button
                className="text-white font-bold bg-[#60cabaf1] hover:bg-[#47837af1] py-3 px-2 rounded-lg"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="text-white font-bold bg-[#60cabaf1] hover:bg-[#47837af1] py-2 px-2 rounded-lg"
              >
                Log In/ Register
              </button>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
