export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white mt-20 p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-semibold text-lg mb-3">Lacoste</h4>
          <p className="text-sm opacity-70">
            Elegància, esport i identitat des de 1933.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Enllaços útils</h4>
          <ul className="space-y-2 opacity-80 text-sm">
            <li className="hover:opacity-100 cursor-pointer">Contacte</li>
            <li className="hover:opacity-100 cursor-pointer">Política de privacitat</li>
            <li className="hover:opacity-100 cursor-pointer">Termes i condicions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Xarxes socials</h4>
          <div className="flex gap-4 text-2xl">
            <span className="cursor-pointer hover:scale-110 transition">📸</span>
            <span className="cursor-pointer hover:scale-110 transition">🐦</span>
            <span className="cursor-pointer hover:scale-110 transition">📘</span>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs opacity-60">
        © 2025 Lacoste Store - Projecte educatiu. Tots els drets reservats.
      </p>
    </footer>
  );
}
