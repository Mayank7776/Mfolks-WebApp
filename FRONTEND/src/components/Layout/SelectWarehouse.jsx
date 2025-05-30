import React, { useState } from 'react';
import { HiCheckCircle } from 'react-icons/hi'; // ✅ Icon for success

const warehouseStates = [
  'Delhi',
  'Hyderabad',
  'Pune',
  'Uttar Pradesh',
  'Bangalore',
];

const SelectWarehouse = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSelect = (state) => {
    setSelectedWarehouse(state);
    setIsOpen(false);
    setSuccess(false); // Reset success on new selection
    if (onSelect) onSelect(state);
  };

  const handleProceed = () => {
    // Simulate success
    setSuccess(true);
    // If needed: trigger API or navigation here
  };

  return (
    <div className="relative inline-block text-left p-4 bg-gray-50 rounded-lg shadow-sm">
      <p className="mb-2 text-gray-700 font-medium">
        Select the nearest warehouse to your location:
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 font-medium focus:outline-none"
      >
        {selectedWarehouse ? `Warehouse: ${selectedWarehouse}` : 'Select Warehouse'}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {warehouseStates.map((state) => (
            <div
              key={state}
              onClick={() => handleSelect(state)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {state}
            </div>
          ))}
        </div>
      )}

      {selectedWarehouse && !success && (
        <div className="mt-4">
          <button
            className="bg-[#60cabaf1] text-white px-6 py-2 rounded-lg hover:bg-[#47837af1] font-semibold"
            onClick={handleProceed}
          >
            Proceed with {selectedWarehouse}
          </button>
        </div>
      )}

      {success && (
        <div className="mt-4 flex items-center space-x-2 text-green-600 font-medium">
          <HiCheckCircle className="h-6 w-6" />
          <span>Warehouse successfully selected!</span>
        </div>
      )}
    </div>
  );
};

export default SelectWarehouse;
