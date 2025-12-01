# 🚀 Guia de Desplegament - Lacoste Store

## Opció 1: Desplegar a Vercel (Recomanat)

### Pas 1: Preparar el projecte
1. Descarrega el ZIP del projecte
2. Descomprimeix-lo al teu ordinador
3. Obre una terminal a la carpeta del projecte

### Pas 2: Instal·lar dependències
```bash
npm install
```

### Pas 3: Provar localment (opcional)
```bash
npm run dev
```
Obre http://localhost:3000 per veure la web

### Pas 4: Pujar a GitHub
```bash
# Inicialitzar git
git init

# Afegir tots els fitxers
git add .

# Commit inicial
git commit -m "Initial commit - Lacoste Store"

# Crear repositori a GitHub i connectar-lo
git remote add origin https://github.com/TU_USUARIO/lacoste-store.git
git branch -M main
git push -u origin main
```

### Pas 5: Desplegar a Vercel
1. Ves a https://vercel.com
2. Registra't o inicia sessió
3. Clica "Add New Project"
4. Importa el repositori de GitHub
5. Vercel detectarà automàticament Next.js
6. Clica "Deploy"
7. Espera 2-3 minuts
8. ✅ La teva web estarà disponible!

## Opció 2: Desplegar a Netlify

### Pas 1-3: Igual que Vercel

### Pas 4: Pujar a GitHub (igual que abans)

### Pas 5: Desplegar a Netlify
1. Ves a https://netlify.com
2. Registra't o inicia sessió
3. Clica "Add new site" > "Import an existing project"
4. Connecta amb GitHub i selecciona el repositori
5. Configuració de build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Clica "Deploy site"
7. ✅ Web disponible!

## Opció 3: Desplegar a Cloudflare Pages

### Pas 1-4: Igual que les opcions anteriors

### Pas 5: Desplegar a Cloudflare Pages
1. Ves a https://pages.cloudflare.com
2. Registra't o inicia sessió
3. Clica "Create a project"
4. Connecta amb GitHub
5. Selecciona el repositori
6. Configuració:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`
7. Clica "Save and Deploy"
8. ✅ Web desplegada!

## ⚡ Desplegament ràpid amb Vercel CLI

Si vols desplegar directament sense GitHub:

```bash
# Instal·lar Vercel CLI
npm i -g vercel

# Desplegar
cd lacoste-store
vercel

# Seguir les instruccions interactives
```

## 📝 Notes importants

- **Node.js:** Necessites Node.js 18 o superior
- **Temps de build:** 2-5 minuts
- **Domini gratuït:** Totes les plataformes ofereixen subdominilliure
- **Domini personalitzat:** Es pot configurar després del desplegament
- **SSL/HTTPS:** Inclòs automàticament en totes les plataformes

## 🔧 Solució de problemes

### Error de dependències
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de build
```bash
npm run build
# Revisar els errors al terminal
```

### Port ja en ús
```bash
# Canviar el port
npm run dev -- -p 3001
```

## 📱 Després del desplegament

1. Comparteix l'URL amb clients/amics
2. Configura un domini personalitzat (opcional)
3. Activa analytics (opcional)
4. Configura backups automàtics

## 🎯 URLs de referència

- **Vercel:** https://vercel.com
- **Netlify:** https://netlify.com
- **Cloudflare Pages:** https://pages.cloudflare.com
- **Documentació Next.js:** https://nextjs.org/docs

---

**Nota:** Aquest és un projecte educatiu. No es fan càrrecs reals en el checkout.
