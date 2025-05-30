import { HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Stores/cart";
import { useState, useEffect } from "react";
import Quantity from "../Cart/Quantity.jsx";

const ProductCart = (props) => {
  const carts = useSelector((state) => state.cart.items);
  const { id, name, price, image } = props.data;
  const dispatch = useDispatch();

  // Get quantity from Redux cart state
  const productInCart = carts.find((item) => item.productId === id);
  const cartQuantity = productInCart ? productInCart.quantity : 0;

  // Local quantity state controls UI changes before adding to cart
  const [quantity, setQuantity] = useState(0);

  // Sync local quantity with cart quantity when component mounts or cart changes
  useEffect(() => {
    setQuantity(cartQuantity);
  }, [cartQuantity]);

  // Increment local quantity only (no dispatch)
  const handlePlusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrement local quantity only (no dispatch, but not below 0)
  const handleMinusQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // When user clicks "Add To Cart", update Redux store with current local quantity
  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ productId: id, quantity }));
    }
  };

  return (
    <div className="flex flex-row bg-white px-2 py-2 rounded-xl shadow-sm">
      <div className="w-[150px] h-[200px] overflow-hidden flex-shrink-0 flex items-center justify-center lg:mt-5 mt-10">
        <Link to="#">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        </Link>
      </div>
      <div className="flex flex-col ml-6 py-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div>
          <p>
            <span className="text-xl font-medium text-black">
              Rs {price}
              <span className="text-sm pb-1">/Kg</span>
            </span>
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            <span className="text-black text-lg">Description: </span>
            Offered rod is manufactured with the help of our team of deft
            professionals using the best quality aluminum and advanced
            techniques.
          </p>
        </div>
        <div className="flex gap-2 justify-start items-center pt-2">
          <Quantity
            quantity={quantity}
            onClick={(action, newQty) => {
              if (action === "increment") {
                handlePlusQuantity();
              } else if (action === "decrement") {
                handleMinusQuantity();
              }
            }}
          />
        </div>
        <div className="flex justify-start">
          <button
            onClick={handleAddToCart}
className="flex flex-row items-center justify-center w-[120px] text-white bg-[#60cabaf1] rounded-md py-2 text-sm hover:bg-[#467871f1] active:bg-[#408179f1] transition-colors duration-150 mt-4"
          >
            <HiOutlineShoppingCart className="h-5" /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCart;
