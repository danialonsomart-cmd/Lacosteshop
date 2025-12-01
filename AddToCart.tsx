'use client';
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AddToCart({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!size) return;
    addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!size) return;
    addItem(product, size);
    router.push('/cart');
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3 text-lg">Talles disponibles</h3>
        <div className="flex gap-3 flex-wrap">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-6 py-3 rounded-full border-2 font-medium transition ${
                size === s 
                  ? 'bg-primary text-white border-primary' 
                  : 'border-gray-300 hover:border-primary'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={!size}
          onClick={handleAddToCart}
          className="flex-1 px-8 py-4 bg-lacosteGreen text-white rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold text-lg hover:bg-green-700 transition"
        >
          {added ? '✓ Afegit!' : 'Afegir a la cistella'}
        </motion.button>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          disabled={!size}
          onClick={handleBuyNow}
          className="flex-1 px-8 py-4 bg-primary text-white rounded-2xl disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold text-lg hover:bg-black transition"
        >
          Comprar ara
        </motion.button>
      </div>

      {!size && (
        <p className="text-sm text-gray-500 text-center">
          Si us plau, selecciona una talla
        </p>
      )}
    </div>
  );
}
