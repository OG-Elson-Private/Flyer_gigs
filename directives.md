# Directives de developpement — Flyer Service Demenagement/Transport

**ROLE : Tu es le Senior Web Developer pour ce projet de flyer promotionnel. Ton objectif est de creer un flyer digital visuellement impactant, inspire du design de reference fourni, optimise pour le partage sur les reseaux sociaux et l'impression A4.**

Ce fichier contient les directives et bonnes pratiques pour le developpement du flyer.

**IMPORTANT : Ce projet est un FLYER PROMOTIONNEL au format fixe 1080x1528px (ratio A4), optimise pour le PARTAGE DIGITAL et l'IMPRESSION PDF.**

---

## Objectif du Projet

Creer une page web statique contenant un flyer promotionnel pour un service de demenagement et transport a Liege. Le flyer doit :
- Reproduire le style visuel du design de reference (moving-company-service-flyer)
- Etre dimensionne a 1080x1528px (ratio A4, optimal impression et partage digital)
- Etre imprimable au format A4 via Ctrl+P
- Contenir les informations reelles du service (contact, services, tarifs)

---

## Deploiement Git

### Configuration du Depot

**Repository distant :** https://github.com/OG-Elson-Private/Flyer_gigs.git
**Branche principale :** main

### Securite des Credentials Git

**IMPORTANT : Ne JAMAIS mettre le token GitHub directement dans l'URL du remote.**

Le token est stocke de maniere securisee dans `~/.git-credentials` (permissions 600).
Git utilise le credential helper `store` configure globalement pour lire ce fichier.

- Le remote doit toujours etre sous la forme : `https://github.com/OG-Elson-Private/Flyer_gigs.git` (SANS token)
- Le token est lu automatiquement par git via `credential.helper=store`
- Ne jamais utiliser `git remote set-url` avec un token dans l'URL
- Pour mettre a jour le token : editer `~/.git-credentials`

### Workflow Git

**IMPORTANT : Toujours commit et push automatiquement apres chaque modification significative, sans demander confirmation a l'utilisateur.**

```bash
git branch --show-current
git add .
git commit -m "type: description"
git push origin main
```

**Format des messages de commit :**
- Messages en anglais uniquement
- Format : `type: description concise`
- Types : feat, fix, style, refactor, chore
- NE PAS inclure de lignes d'attribution (Claude Code, Co-Authored-By)

### Quand commiter

- Apres implementation d'un composant complet
- Apres fix de bug visuel
- Apres ajustement du design
- Avant tout changement majeur

### Quand NE PAS commiter

- Code non fonctionnel
- Modifications temporaires de test
- Fichiers temporaires (.DS_Store, node_modules, .next)

---

## Structure du Projet

```
flyer-gigs/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Page principale (conteneur du flyer)
│   │   ├── layout.tsx         # Layout avec metadonnees
│   │   └── globals.css        # Styles globaux + print styles
│   └── components/
│       ├── Flyer.tsx           # Composant racine du flyer (1080x1528)
│       ├── HeroSection.tsx     # Titre accrocheur + images
│       ├── ServicesSection.tsx  # Liste des services
│       ├── CTASection.tsx      # Call to action + numero
│       ├── WhyUsSection.tsx    # Avantages concurrentiels
│       ├── FooterSection.tsx   # Coordonnees
│       └── DecorativeShapes.tsx # Formes geometriques arriere-plan
├── public/
│   └── images/
│       └── camionnette.jpg    # Photo reelle du vehicule
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## Design Guidelines

### Reference Visuelle

Le design s'inspire du flyer "Moving Company Service" fourni comme reference.
Elements cles a reproduire :
- Formes geometriques dynamiques en arriere-plan (courbes, vagues)
- Titre massif et accrocheur en haut
- Photo du vehicule integree dans le design (pas un rectangle brut)
- Numero de telephone ultra-visible dans un badge colore
- Sections services et avantages avec checkmarks colores
- Footer sobre avec coordonnees

### Dimensions

- **Format flyer :** 1080px x 1528px (ratio A4 — 210mm x 297mm)
- **PAS de responsive** — dimensions fixes
- **Le flyer est un "poster digital"** centre sur la page

### Palette de Couleurs

```js
// tailwind.config.ts
colors: {
  'flyer-orange':       '#FF6B00',   // CTA principal, numero tel, accents chauds
  'flyer-orange-dark':  '#E05E00',   // Hover / variante
  'flyer-orange-light': '#FF8A33',   // Accents secondaires
  'flyer-purple':       '#4A1A8A',   // Formes deco, titres sections
  'flyer-purple-light': '#6B3FA0',   // Variante claire
  'flyer-dark':         '#1A1A2E',   // Texte principal fonce
  'flyer-gray':         '#F0F0F5',   // Fond sections
  'flyer-gray-dark':    '#9CA3AF',   // Texte secondaire
  'flyer-white':        '#FFFFFF',   // Fond principal
  'flyer-green':        '#22C55E',   // Checkmarks
}
```

### Typographie

```js
// tailwind.config.ts
fontFamily: {
  sans: ['Inter', 'Arial', 'sans-serif'],
  display: ['Inter', 'Arial', 'sans-serif'],  // Pour titres avec font-weight bold
}
```

Hierarchie typographique :
- **Titre principal :** Inter ExtraBold/Black, 72-96px, MAJUSCULES
- **Sous-titre :** Inter SemiBold, 24-28px
- **Numero de telephone :** Inter ExtraBold, 48-56px (doit etre TRES visible)
- **Titres sections :** Inter Bold, 28-32px, MAJUSCULES
- **Items services :** Inter Medium, 18-20px
- **Footer :** Inter Regular, 14-16px

### Formes Decoratives (DecorativeShapes.tsx)

Reproduire le style du flyer de reference :
- Grandes courbes/vagues en violet et gris clair
- Positionnees en absolute derriere le contenu
- Utiliser `clip-path`, `border-radius` ou SVG
- Creent un cadre dynamique autour du contenu
- Z-index : 0 (derriere tout le contenu textuel)

Placement suggere :
- Courbe violette en haut a gauche (encadre le titre)
- Courbe grise/violette au milieu a droite (derriere la zone CTA)
- Petite forme en bas a gauche (encadre le footer)

---

## Contenu du Flyer

### Hero Section (~40% du flyer)

```
[Coin haut gauche : petit badge ou nom du service]

        DEMENAGEMENT ?
        Vous bougez, on transporte !

[Photo camionnette a droite, integree dans une forme decoupee]
```

- Le titre "DEMENAGEMENT ?" doit etre le texte le plus grand
- La photo camionnette (public/images/camionnette.jpg) est integree avec un clip-path ou un mask CSS pour s'harmoniser avec le design (pas de rectangle brut avec coins carres)
- Espace visuel aere

### Services Section (~20%)

```
NOS SERVICES
> Mini-demenagement (studios, kots, pieces)
> Transport de meubles & electromenager
> Livraison achats 2ememain / Marketplace / IKEA
> Transport de colis & marchandises
> Camionnette avec hayon (chargement facile)
```

- Checkmarks en vert (#22C55E)
- Titre "NOS SERVICES" en violet bold majuscules
- Liste compacte et lisible

### CTA Section (~15%)

```
+------------------------------+
|  Appelez pour un devis       |
|  gratuit !                   |
|                              |
|  Tel: +32 467 83 92 99          |  <- Le PLUS GROS texte
|                              |
+------------------------------+
```

- Badge/bandeau orange vif
- Le numero de telephone est le texte le PLUS VISIBLE de tout le flyer
- Police ExtraBold, grande taille
- Contraste fort : texte blanc sur fond orange

### Why Us Section (~15%)

```
POURQUOI NOUS ?
> Prix imbattables (des 25EUR)
> Disponibilite flexible (a convenir)
> Camionnette spacieuse (~20m3) avec hayon
> Devis gratuit et rapide
```

- Checkmarks orange
- Titre en violet

### Footer Section (~10%)

```
Transport & Demenagement Express | Liege et environs
Tel: +32 467 83 92 99
```

- Sobre, compact
- Fond legerement colore (gris ou violet tres clair)

---

## Images & Assets

### Photo de la Camionnette

- **Source :** IMG_20260214_155249.jpg (fournie par l'utilisateur)
- **Emplacement :** `public/images/camionnette.jpg`
- **Traitement CSS suggere :**
  - `brightness(1.05)` pour eclaircir legerement
  - `contrast(1.1)` pour plus de punch
  - `clip-path` ou `mask` pour integration design
- **COPIER ce fichier depuis /mnt/user-data/uploads/ si necessaire**

### Icones

- SVG inline uniquement (pas de bibliotheque externe)
- Icones necessaires : checkmark, telephone, localisation
- Style : filled, couleur selon le contexte

---

## Optimisation Impression

### Contraintes Print

```css
@page {
  size: A4;
  margin: 0;
}

@media print {
  html, body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Le flyer 1080px doit rentrer dans A4 (794px) */
  .flyer-container {
    transform: scale(0.735);
    transform-origin: top center;
  }
}
```

### Regles Print

- Forcer l'impression des couleurs de fond
- Le flyer entier doit tenir sur UNE page A4
- Pas de saut de page
- Tester via Ctrl+P > Apercu

---

## Acces & Serveur

### Configuration

- **Serveur :** Hetzner VPS — 46.224.49.147
- **Repertoire :** /var/www/flyer-gigs/
- **Port :** 3001
- **URL :** http://46.224.49.147:3001

### Cohabitation avec les autres projets

| Projet          | Port | URL                       |
|-----------------|------|---------------------------|
| TradeHub        | 80   | http://46.224.49.147      |
| CV Landing Page | 3000 | http://46.224.49.147:3000 |
| Flyer Gigs      | 3001 | http://46.224.49.147:3001 |

### Configuration du port

Dans `package.json` :
```json
"scripts": {
  "dev": "next dev -p 3001",
  "build": "next build",
  "start": "next start -p 3001"
}
```

---

## Regles d'Or

### 1. Impact Visuel Maximum

- Le flyer doit attirer l'oeil en moins de 2 secondes
- Le titre et le numero de telephone dominent visuellement
- Les formes decoratives ajoutent du dynamisme
- La photo de la camionnette reelle credibilise le service

### 2. Fidelite au Style de Reference

- Reprendre les courbes/vagues geometriques
- Meme disposition generale (hero -> services -> CTA -> footer)
- Meme energie visuelle (couleurs vives, contrastes forts)
- Ne PAS copier le contenu texte du modele (utiliser le contenu reel)

### 3. Dimensions Fixes

- 1080x1528px exactement — PAS de responsive
- Tout le contenu DOIT tenir dans ces dimensions
- Si le contenu deborde, reduire les tailles de police/espacements

### 4. Photo Reelle = Credibilite

- Utiliser la VRAIE photo de la camionnette
- L'integrer proprement dans le design (masque/clip-path)
- Ne PAS utiliser d'images stock ou generees

---

## Tests Avant Commit

### Checklist

```
[ ] Le flyer fait exactement 1080x1528px
[ ] Le conteneur est centre sur la page
[ ] Le titre "DEMENAGEMENT ?" est lisible et impactant
[ ] Le numero +32 467 83 92 99 est le PLUS GROS texte du flyer
[ ] La photo camionnette est affichee et bien integree
[ ] Les formes decoratives sont visibles et bien positionnees
[ ] Les 5 services sont listes
[ ] Les 4 avantages sont listes
[ ] Le footer contient les coordonnees
[ ] L'impression A4 (Ctrl+P) est correcte
[ ] Pas d'erreurs console
[ ] Le design est visuellement professionnel et impactant
```

---

## Langue et Communication

- **Communication avec utilisateur :** Francais
- **Code (TSX/CSS/JS) :** Anglais (classes, variables, commentaires)
- **Messages de commit :** Anglais
- **Contenu du flyer :** Francais

---

## Informations de Contact (pour le flyer)

- **Nom du service :** Transport & Demenagement Express
- **Telephone :** +32 467 83 92 99
- **Zone :** Liege et environs
- **Disponibilite :** A convenir par telephone
- **Vehicule :** Camionnette caisse ~20m3 avec hayon

---

**Derniere mise a jour :** 14/02/2026
