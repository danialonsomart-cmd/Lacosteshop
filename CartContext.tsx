'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '@/data/products';

interface CartItem extends Product {
  size: string;
  cartId: string;
}

interface CartContextType {
  cart: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (cartId: string) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('lacoste-cart');
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lacoste-cart', JSON.stringify(cart));
    }
  }, [cart, mounted]);

  function addItem(product: Product, size: string) {
    const cartId = `${product.id}-${size}-${Date.now()}`;
    setCart([...cart, { ...product, size, cartId }]);
  }

  function removeItem(cartId: string) {
    setCart(cart.filter((item) => item.cartId !== cartId));
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
