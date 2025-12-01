'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Product } from '@/data/products';

interface Order {
  id: string;
  date: string;
  items: any[];
  total: number;
}

interface UserContextType {
  favorites: Product[];
  orders: Order[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  addOrder: (order: Omit<Order, 'id' | 'date'>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedFavs = localStorage.getItem('lacoste-favorites');
    if (savedFavs) {
      try {
        setFavorites(JSON.parse(savedFavs));
      } catch (e) {
        console.error('Error loading favorites:', e);
      }
    }
    
    const savedOrders = localStorage.getItem('lacoste-orders');
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (e) {
        console.error('Error loading orders:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lacoste-favorites', JSON.stringify(favorites));
    }
  }, [favorites, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lacoste-orders', JSON.stringify(orders));
    }
  }, [orders, mounted]);

  function addFavorite(product: Product) {
    if (!favorites.find((p) => p.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  }

  function removeFavorite(productId: string) {
    setFavorites(favorites.filter((p) => p.id !== productId));
  }

  function isFavorite(productId: string): boolean {
    return favorites.some((p) => p.id === productId);
  }

  function addOrder(order: Omit<Order, 'id' | 'date'>) {
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`,
      date: new Date().toISOString(),
    };
    setOrders([newOrder, ...orders]);
  }

  return (
    <UserContext.Provider value={{ favorites, orders, addFavorite, removeFavorite, isFavorite, addOrder }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
