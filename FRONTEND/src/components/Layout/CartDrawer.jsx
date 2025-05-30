import { HiMiniXMark } from "react-icons/hi2";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ cartDrawerOpen, cartDrawerToggle }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        cartDrawerOpen ? "tanslate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={cartDrawerToggle}>
          <HiMiniXMark className="h-6 w-6 hover:text-black text-gray-700" />
        </button>
      </div>
      {/*  cart content with scroable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContent />
      </div>
      {/* Check-Out button */}
      <div className="bg-white p-4 sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          Checkout
        </button>
        <p className="text-sm tracking-tighter mt-2 text-gray-500 text-center">
          Shipping,Taxes and Discount Calculated at Checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
