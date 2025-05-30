import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Products } from "../../product.jsx";

const CartContent = () => {
  const carts = useSelector((state) => state.cart.items);

  // Calculate total price of all cart items
  const totalPrice = carts.reduce((acc, item) => {
    const product = Products.find((p) => p.id === item.productId);
    if (!product) return acc;
    return acc + product.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="py-5">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
        <div className="flex justify-center items-center border-2">
          <p className="text-black font-semibold text-md mt-0.5 truncate">
            Grand Total: Rs {totalPrice}
          </p>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default CartContent;
