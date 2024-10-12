import React, { useState } from 'react';
import { Item } from '../types';

interface PropiedadesFormularioAgregarItem {
  agregarItem: (item: Item) => void;
}

const FormularioAgregarItem: React.FC<PropiedadesFormularioAgregarItem> = ({ agregarItem }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && cantidad) {
      const nuevoItem: Item = {
        id: Date.now(),
        nombre,
        cantidad: parseInt(cantidad, 10),
      };
      agregarItem(nuevoItem);
      setNombre('');
      setCantidad('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Artículo</h2>
      <div className="mb-4">
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del Artículo</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cantidad" className="block text-sm font-medium text-gray-700">Cantidad</label>
        <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
          min="0"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
        Agregar Artículo
      </button>
    </form>
  );
};

export default FormularioAgregarItem;