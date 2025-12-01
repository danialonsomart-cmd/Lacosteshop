# 🐊 Lacoste Store 2025

E-commerce modern desenvolupat amb Next.js 15, TypeScript i TailwindCSS. Col·leccions exclusives Djokovic & Nadal.

## 🚀 Característiques

- ✅ **35 productes** organitzats per categories
- ✅ **Col·leccions especials** Djokovic i Nadal
- ✅ **Cistella persistent** amb localStorage
- ✅ **Sistema de preferits**
- ✅ **Checkout simulat**
- ✅ **Perfil d'usuari** amb historial de comandes
- ✅ **Disseny responsive** i animacions amb Framer Motion
- ✅ **Splash screen** animat
- ✅ **Imatges reals** d'alta qualitat

## 🛠 Tecnologies

- **Framework:** Next.js 15 (App Router)
- **Llenguatge:** TypeScript
- **Estils:** TailwindCSS
- **Animacions:** Framer Motion
- **Gestió d'estat:** React Context API
- **Persistència:** localStorage

## 📦 Instal·lació

```bash
# Instal·lar dependències
npm install

# Executar en mode desenvolupament
npm run dev

# Construir per producció
npm run build

# Executar en producció
npm start
```

## 📁 Estructura del projecte

```
lacoste-store/
├── app/
│   ├── layout.tsx                 # Layout principal
│   ├── page.tsx                   # Pàgina d'inici
│   ├── store/                     # Botiga
│   ├── product/[id]/             # Producte individual
│   ├── cart/                      # Cistella
│   ├── checkout/                  # Checkout
│   ├── profile/                   # Perfil usuari
│   ├── sales/                     # Rebaixes
│   ├── categories/[category]/    # Categories
│   └── collections/               # Col·leccions Djokovic/Nadal
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── SplashScreen.tsx
├── context/
│   ├── CartContext.tsx            # Gestió cistella
│   └── UserContext.tsx            # Preferits i comandes
├── data/
│   └── products.ts                # Base de dades productes
└── styles/
    └── globals.css
```

## 🎨 Pàgines disponibles

- **/** - Pàgina d'inici amb hero i categories
- **/store** - Botiga completa (35 productes)
- **/product/[id]** - Detall de producte
- **/cart** - Cistella de compra
- **/checkout** - Finalitzar compra
- **/profile** - Perfil d'usuari
- **/sales** - Rebaixes
- **/collections/djokovic** - Col·lecció Djokovic
- **/collections/nadal** - Col·lecció Nadal
- **/categories/[category]** - Filtrar per categoria

## 🎯 Funcionalitats principals

### Cistella
- Afegir/eliminar productes
- Selector de talles
- Persistència en localStorage
- Resum de compra en temps real

### Preferits
- Marcar productes com a preferits
- Vista ràpida des del perfil
- Persistència entre sessions

### Comandes
- Historial complet de comandes
- Detalls de cada compra
- Data i hora de cada comanda

## 🎨 Disseny

- Paleta de colors corporativa Lacoste
- Tipografia moderna i llegible
- Animacions subtils amb Framer Motion
- Responsive design (mobile-first)
- Splash screen de benvinguda

## 📝 Notes tècniques

- El projecte usa Next.js 15 amb App Router
- Les imatges provenen d'Unsplash via CDN
- El checkout és simulat (no es fan càrrecs reals)
- Les dades es guarden en localStorage

## 👨‍💻 Desenvolupat per

**Daniel** - Flow Workery
Barcelona, 2025

---

*Projecte educatiu - Lacoste Store 2025*
