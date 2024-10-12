import React from 'react';
import { Item } from '../types';
import { Plus, Minus } from 'lucide-react';

interface InventoryListProps {
  inventory: Item[];
  updateStock: (id: number, newQuantity: number) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ inventory, updateStock }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inventory</h2>
      {inventory.length === 0 ? (
        <p className="text-gray-500">No items in inventory</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {inventory.map((item) => (
            <li key={item.id} className="py-4 flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">{item.name}</span>
              <div className="flex items-center">
                <button
                  onClick={() => updateStock(item.id, item.quantity - 1)}
                  className="text-red-500 hover:text-red-700 mr-2"
                  disabled={item.quantity <= 0}
                >
                  <Minus size={20} />
                </button>
                <span className="text-lg font-semibold mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateStock(item.id, item.quantity + 1)}
                  className="text-green-500 hover:text-green-700 ml-2"
                >
                  <Plus size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryList;