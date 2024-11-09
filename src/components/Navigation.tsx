import React, { useState } from 'react';
import { Gift, Cake, Cookie, Coffee, Contact, Store } from 'lucide-react';
import ProductsModal from './ProductsModal';

const categories = [
  { name: 'Productos', icon: Store, isSpecial: true },
  { name: 'Panettoncitos', icon: Gift },
  { name: 'Mini Tortas', icon: Cake },
  { name: 'Detalles', icon: Gift },
  { name: 'Tortas', icon: Cake },
  { name: 'Porciones', icon: Cake },
  { name: 'Muffins', icon: Coffee },
  { name: 'Cookies', icon: Cookie },
  { name: 'Brownies', icon: Cookie },
  { name: 'Salados', icon: Cookie },
  { name: 'Contacto', icon: Contact, isSpecial: true }
];

export default function Navigation() {
  const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

  const handleCategoryClick = (category: string) => {
    if (category === 'Productos') {
      setIsProductsModalOpen(true);
    }
  };

  return (
    <>
      <nav className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between space-x-4 py-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`flex flex-col items-center group hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors ${
                    category.isSpecial ? 'bg-purple-800' : ''
                  }`}
                >
                  <Icon className="h-5 w-5 mb-1" />
                  <span className="text-sm whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <ProductsModal
        isOpen={isProductsModalOpen}
        onClose={() => setIsProductsModalOpen(false)}
      />
    </>
  );
}