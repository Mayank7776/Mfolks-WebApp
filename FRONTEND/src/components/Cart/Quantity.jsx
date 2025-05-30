import React from "react";

const Quantity = ({ quantity, onClick }) => {
  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => onClick('decrement', quantity - 1)}
        className="bg-gray-100 rounded-xl w-[30px] h-[30px] font-bold text-xl flex justify-center items-center"
      >
        -
      </button>

      <span className="bg-gray-300 text-white rounded-xl w-[30px] h-[30px] font-bold text-xl flex justify-center items-center">
        {quantity}
      </span>

      <button
        onClick={() => onClick('increment', quantity + 1)}
        className="bg-gray-100 rounded-xl w-[30px] h-[30px] font-bold text-xl flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
