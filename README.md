# TDL Formation — Landing "Récupération de points" (Next.js + Tailwind)

Projet Next.js (App Router) prêt pour **Vercel**.  
Contient la landing `components/TDLRecupPointsLanding.tsx` intégrée sur `/`.

## Démarrage local

```bash
npm install
npm run dev
# ou
pnpm install && pnpm dev
# ou
yarn && yarn dev
```

Ouvrir http://localhost:3000

## Déploiement sur Vercel

1. Poussez ce dossier sur un dépôt GitHub public.
2. Sur https://vercel.com → **Add New Project** → **Import Git Repository** → choisissez votre dépôt.
3. Laissez les réglages par défaut (framework détecté : Next.js), puis **Deploy**.
4. Vous obtiendrez une URL du type `https://tdl-formation-landing.vercel.app`.

## Paramètres à adapter

- Numéro de téléphone, adresse, lien Digiforma dans `components/TDLRecupPointsLanding.tsx`.
- Métadonnées (SEO) dans `app/layout.tsx`.
