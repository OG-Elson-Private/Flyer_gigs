# PRD — FLYER SERVICE DEMENAGEMENT / TRANSPORT

**Projet :** Flyer_gigs
**Date de creation :** 14/02/2026

---

## 1. Resume du Projet

| Champ       | Detail                                                              |
|-------------|---------------------------------------------------------------------|
| Nom         | Flyer_gigs                                                          |
| Type        | Page web statique (flyer promotionnel)                              |
| Objectif    | Creer un flyer digital professionnel pour promouvoir un service de demenagement et transport de meubles/colis a Liege et environs |
| Stack       | Next.js 14 + Tailwind CSS + TypeScript                              |
| Serveur     | Hetzner VPS (46.224.49.147)                                         |
| Port        | 3001 (pour cohabiter avec TradeHub:80 et CV:3000)                   |
| Repo        | git@github.com:OG-Elson-Private/Flyer_gigs.git                     |

Le flyer doit etre :
- Visuellement impactant (inspire du design de reference)
- Optimise pour le partage digital (Facebook, 2ememain, WhatsApp, Instagram Story)
- Imprimable au format A4 (pour distribution physique)

---

## 2. Design de Reference — Analyse du flyer modele

Le flyer de reference (moving-company-service-flyer) utilise :

### Layout

- Format portrait (ratio ~4:5, adapte poster/flyer)
- Fond blanc dominant avec formes geometriques colorees (courbes, vagues violettes/grises) qui creent du dynamisme
- Grande zone hero en haut avec titre accrocheur massif
- Sections bien delimitees visuellement

### Zones principales (de haut en bas)

```
+-------------------------------------------+
|  [LOGO]          TITRE ACCROCHEUR         |  <- Hero (40%)
|                  Sous-titre               |
|  [Photo livreur]     [Photo camion]       |
+-------------------------------------------+
|  NOS SERVICES    |  NUMERO DE TELEPHONE   |  <- Middle (35%)
|  > Service 1     |  (gros, bien visible)  |
|  > Service 2     |                        |
|  > Service 3     |  POURQUOI NOUS ?       |
|  > Service 4     |  > Avantage 1          |
|  > Service 5     |  > Avantage 2          |
+-------------------------------------------+
|  [Nom entreprise] | [Adresse] | [Site]    |  <- Footer (10%)
+-------------------------------------------+
```

### Couleurs (modele)

- Orange vif (CTA, numero de telephone, accents)
- Violet fonce (formes decoratives, titres secondaires)
- Blanc (fond principal)
- Gris clair (formes d'arriere-plan)

### Typographie (modele)

- Titre principal : Extra Bold, tres grande taille, majuscules
- Sous-titres : Bold
- Corps : Regular
- Numero de telephone : Extra Bold, tres visible

---

## 3. Adaptation au Projet — Contenu reel du flyer

### Identite

| Champ          | Valeur                                         |
|----------------|------------------------------------------------|
| Nom du service | Transport & Demenagement Express                 |
| Zone           | Liege et environs (rayon ~50km)                |
| Contact        | +32 467 83 92 99                                  |
| Disponibilite  | A convenir par telephone                       |
| Vehicule       | Camionnette caisse avec hayon (~15-20m3)       |

### Titre accrocheur (Hero)

**Option A (par defaut) :** "DEMENAGEMENT ?"
Sous-titre : "Vous bougez, on transporte !"

**Option B :** "BESOIN DE TRANSPORTER ?"
Sous-titre : "Meubles, colis, demenagement — on s'en charge !"

**Option C :** "ON DEMENAGE POUR VOUS !"
Sous-titre : "Service rapide, prix imbattables, region de Liege"

> Le developpeur implemente l'Option A par defaut. L'utilisateur pourra modifier facilement via les props du composant.

### Nos Services

- Mini-demenagement (studios, kots, pieces)
- Transport de meubles & electromenager
- Livraison achats 2ememain / Marketplace / IKEA
- Transport de colis & marchandises
- Camionnette avec hayon (chargement facile)

### Pourquoi nous choisir ?

- Prix imbattables (des 25EUR)
- Camionnette spacieuse (~20m3) avec hayon
- Devis gratuit et rapide

### Call to Action

- Numero : +32 467 83 92 99
- Texte : "Appelez pour un devis gratuit !" ou "Contactez-nous maintenant !"

### Footer

Transport & Demenagement Express | Liege et environs
Tel: +32 467 83 92 99

### Images

Le flyer doit inclure la photo de la camionnette reelle (IMG_20260214_155249.jpg) fournie par l'utilisateur.
- La photo sera placee dans `public/images/camionnette.jpg`
- Appliquer un leger traitement CSS si necessaire (brightness, contrast) pour s'integrer au design
- Pour les autres visuels (icones, illustrations) : utiliser des icones SVG inline (pas de dependance externe)

---

## 4. Palette de Couleurs

```js
// tailwind.config.ts
colors: {
  'flyer-orange':      '#FF6B00',   // CTA principal, numero tel
  'flyer-orange-dark': '#E05E00',   // Hover CTA
  'flyer-purple':      '#4A1A8A',   // Formes deco, titres sections
  'flyer-purple-light':'#6B3FA0',   // Variante plus claire
  'flyer-dark':        '#1A1A2E',   // Texte fonce
  'flyer-gray':        '#F0F0F5',   // Fond sections alternees
  'flyer-white':       '#FFFFFF',   // Fond principal
  'flyer-green':       '#22C55E',   // Checkmarks services
}
```

---

## 5. Specifications Techniques

### Format de sortie

Le flyer doit fonctionner en DEUX modes :

**Format principal : A4 (210mm x 297mm)**
- Dimensions pixel : 1080 x 1528px (ratio A4 — 1:1.414)
- Le conteneur principal a ces dimensions fixes
- Affiche centre sur la page web
- Capture d'ecran possible pour partage digital (Facebook, 2ememain, WhatsApp)
- Impression A4 via Ctrl+P sans perte de mise en page
- Couleurs de fond imprimees (print-color-adjust: exact)

### Responsive

PAS de responsive necessaire. Le flyer est un document a dimensions fixes (1080x1528, ratio A4). Sur mobile, il peut scroller horizontalement ou etre zoome.

### Structure des composants

```
flyer-gigs/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Page principale (conteneur du flyer)
│   │   ├── layout.tsx         # Layout avec metadonnees
│   │   └── globals.css        # Styles globaux + print styles
│   └── components/
│       ├── Flyer.tsx           # Composant principal du flyer (1080x1528)
│       ├── HeroSection.tsx     # Zone hero : titre + sous-titre + images
│       ├── ServicesSection.tsx  # Liste des services avec checkmarks
│       ├── CTASection.tsx      # Numero de telephone + call to action
│       ├── WhyUsSection.tsx    # Section "Pourquoi nous choisir"
│       ├── FooterSection.tsx   # Bas du flyer : nom + contact
│       └── DecorativeShapes.tsx # Formes geometriques d'arriere-plan
├── public/
│   └── images/
│       └── camionnette.jpg    # Photo reelle de la camionnette
├── tailwind.config.ts
├── package.json
└── README.md
```

### Details des composants

**Flyer.tsx (composant racine) :**
- Conteneur fixe : 1080x1528px
- Fond blanc
- Overflow hidden (les formes decoratives debordent)
- Position relative (pour positionner les formes en absolute)

**DecorativeShapes.tsx :**
- Formes CSS (border-radius, clip-path) en position absolute
- Reproduire les courbes violettes/grises du modele
- Z-index bas (derriere le contenu)

**HeroSection.tsx :**
- ~40% de la hauteur totale
- Titre principal : Extra Bold, grande taille, couleur foncee
- Sous-titre : Medium, plus petit
- Image camionnette : positionnee a droite, avec clip-path ou mask pour s'integrer au design
- Zone gauche : espace pour le titre

**ServicesSection.tsx :**
- Liste de 5 services avec icone checkmark verte
- Titre "NOS SERVICES" en violet bold
- Fond legerement grise ou zone delimitee

**CTASection.tsx :**
- Fond orange vif (ou badge orange)
- Texte "Appelez pour un devis gratuit !"
- Numero : +32 467 83 92 99 en TRES GROS (le plus visible du flyer)
- Police Extra Bold

**WhyUsSection.tsx :**
- 4 avantages avec checkmarks orange
- Titre "POURQUOI NOUS ?" en violet

**FooterSection.tsx :**
- Bande en bas du flyer
- Nom du service + zone + numero
- Style sobre

---

## 6. Styles CSS Print

```css
@page {
  size: A4;
  margin: 0;
}

@media print {
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Centrer le flyer sur la page A4 */
  .flyer-container {
    transform: scale(0.73);  /* 794px / 1080px ~ 0.73 */
    transform-origin: top center;
  }
}
```

---

## 7. Dependances

```json
{
  "dependencies": {
    "next": "^14",
    "react": "^18",
    "react-dom": "^18",
    "tailwindcss": "^3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/react": "^18",
    "@types/node": "^20"
  }
}
```

Pas de dependances externes supplementaires. Les icones sont en SVG inline (pas de bibliotheque d'icones).

---

## 8. Deploiement & Acces

| Champ       | Valeur                          |
|-------------|---------------------------------|
| Serveur     | Hetzner VPS — 46.224.49.147    |
| Repertoire  | /var/www/flyer-gigs/            |
| Port        | 3001                            |
| URL         | http://46.224.49.147:3001       |

### Cohabitation ports

| Projet          | Port | URL                       |
|-----------------|------|---------------------------|
| TradeHub        | 80   | http://46.224.49.147      |
| CV Landing Page | 3000 | http://46.224.49.147:3000 |
| Flyer Gigs      | 3001 | http://46.224.49.147:3001 |

### Commandes

```bash
# Dev
next dev -p 3001

# package.json
"scripts": {
  "dev": "next dev -p 3001"
}
```

---

## 9. Git & Workflow

| Champ      | Valeur                                          |
|------------|-------------------------------------------------|
| Repository | git@github.com:OG-Elson-Private/Flyer_gigs.git |
| Branche    | main                                            |

### Workflow

1. Commit apres chaque section/composant implemente
2. Messages en anglais : "feat: add hero section with title"
3. Push automatique apres chaque commit
4. PAS de lignes d'attribution (Claude Code, Co-Authored-By)

```bash
git add .
git commit -m "type: description"
git push origin main
```

---

## 10. Checklist de Validation

- [ ] Le flyer fait exactement 1080x1528px (ratio A4)
- [ ] Le titre accrocheur est lisible et impactant
- [ ] Le numero de telephone est le plus gros texte du flyer
- [ ] La photo de la camionnette est integree proprement
- [ ] Les 5 services sont listes avec checkmarks
- [ ] Les 4 avantages "Pourquoi nous" sont visibles
- [ ] Les formes decoratives donnent du dynamisme au design
- [ ] L'impression A4 (Ctrl+P) produit un resultat correct
- [ ] Le serveur tourne sur le port 3001 sans conflit
- [ ] Pas d'erreurs console
- [ ] Le flyer est visuellement aussi bon que le modele de reference

---

## 11. Priorite d'Implementation

**Etape 1 : Setup projet**
- Init Next.js + Tailwind + TypeScript
- Configurer port 3001
- Configurer git remote
- Copier la photo camionnette dans public/images/

**Etape 2 : Structure de base**
- Creer le conteneur 1080x1528
- Implementer DecorativeShapes (formes d'arriere-plan)
- Layout general des zones

**Etape 3 : Hero Section**
- Titre + sous-titre
- Integration photo camionnette avec masque/clip-path
- Style typographique impactant

**Etape 4 : Services + CTA**
- Liste services avec checkmarks
- Badge CTA orange avec numero de telephone

**Etape 5 : Why Us + Footer**
- Section avantages
- Footer avec coordonnees

**Etape 6 : Polish + Print**
- Ajustements visuels
- Test impression A4
- Commit final
