import React, { useState } from 'react';
import { Package } from 'lucide-react';
import ListaInventario from './components/ListaInventario';
import FormularioAgregarItem from './components/FormularioAgregarItem';
import { Item } from './types';

function App() {
  const [inventario, setInventario] = useState<Item[]>([]);

  const agregarItem = (item: Item) => {
    setInventario([...inventario, item]);
  };

  const actualizarStock = (id: number, nuevaCantidad: number) => {
    setInventario(inventario.map(item => 
      item.id === id ? { ...item, cantidad: nuevaCantidad } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center">
          <Package className="mr-2" /> App de Control de Stock
        </h1>
      </header>
      <div className="max-w-4xl mx-auto">
        <FormularioAgregarItem agregarItem={agregarItem} />
        <ListaInventario inventario={inventario} actualizarStock={actualizarStock} />
      </div>
    </div>
  );
}

export default App;