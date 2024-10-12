import React from 'react';
import { Item } from '../types';
import { Plus, Minus } from 'lucide-react';

interface PropiedadesListaInventario {
  inventario: Item[];
  actualizarStock: (id: number, nuevaCantidad: number) => void;
}

const ListaInventario: React.FC<PropiedadesListaInventario> = ({ inventario, actualizarStock }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Inventario</h2>
      {inventario.length === 0 ? (
        <p className="text-gray-500">No hay artículos en el inventario</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {inventario.map((item) => (
            <li key={item.id} className="py-4 flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">{item.nombre}</span>
              <div className="flex items-center">
                <button
                  onClick={() => actualizarStock(item.id, item.cantidad - 1)}
                  className="text-red-500 hover:text-red-700 mr-2"
                  disabled={item.cantidad <= 0}
                >
                  <Minus size={20} />
                </button>
                <span className="text-lg font-semibold mx-2">{item.cantidad}</span>
                <button
                  onClick={() => actualizarStock(item.id, item.cantidad + 1)}
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

export default ListaInventario;