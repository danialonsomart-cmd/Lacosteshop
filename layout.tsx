import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "Lacoste Store 2025",
  description: "E-commerce oficial inspirat en Novak Djokovic i Rafa Nadal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <body className="antialiased">
        <CartProvider>
          <UserProvider>
            <SplashScreen />
            <Header />
            <main className="pt-20 min-h-screen">{children}</main>
            <Footer />
          </UserProvider>
        </CartProvider>
      </body>
    </html>
  );
}
