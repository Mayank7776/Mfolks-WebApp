import { useEffect, useState } from "react";
import { Products } from "../../product.jsx";
import Quantity from "./Quantity.jsx";
import { useDispatch } from "react-redux";
import { incrementQty, decrementQty, deleteItem } from "../Stores/cart";
import { MdDeleteForever } from "react-icons/md";

const CartItem = (props) => {
  const [product, setProduct] = useState([]);
  const { productId, quantity } = props.data;
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = Products.filter(
      (product) => product.id === productId
    )[0];
    setProduct(findDetail);
  }, [productId]);

  // ❌ Don't render if quantity is 0
  if (quantity === 0 || !product) return null;

  const handleMinusQuantity = () => {
    if (quantity > 0) {
      dispatch(decrementQty({ productId, quantity: 1 }));
    }
  };

  const handlePlusQuantity = () => {
    dispatch(incrementQty({ productId, quantity: 1 }));
  };

  console.log(props.data);
  return (
   <div className="flex flex-col gap-5">
    <div className="flex flex-row gap-2">
      <div className="w-full max-w-[600px] flex justify-between items-center bg-white text-gray-900 border border-gray-300 rounded-md p-3 shadow-sm mb-3 h-[110px] overflow-hidden">
        {/* Product Image */}
        <img
          className="w-12 h-12 object-cover rounded-md"
          src={product.image}
          alt={product.name}
        />

        {/* Product Info */}
        <div className="flex-1 ml-3 min-w-0">
          <h3 className="font-semibold text-base truncate">{product.name}</h3>
          <p className="text-gray-600 text-xs truncate">
            Price: Rs {product.price} × {quantity}
          </p>
          <p className="text-black font-semibold text-sm mt-0.5 truncate">
            Total: Rs {product.price * quantity}
          </p>
        </div>

        {/* Quantity Controller */}
        <div className="w-fit ml-3">
          <Quantity
            quantity={quantity}
            onClick={(action) => {
              if (action === "increment") {
                handlePlusQuantity();
              } else if (action === "decrement") {
                handleMinusQuantity();
              }
            }}
          />
        </div>
      </div>
      <div className="flex justify-end items-center">
        {/* Delete Button */}
        <button onClick={() => dispatch(deleteItem({ productId, quantity }))}>
          <MdDeleteForever className="w-10 h-8 hover:bg-black" />
        </button>
      </div>
    </div>
    </div>
  );
};

export default CartItem;
