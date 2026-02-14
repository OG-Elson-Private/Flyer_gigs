# STORIES — Flyer Service Demenagement/Transport (Methode BMAD)

**Projet :** Flyer_gigs
**Date :** 14/02/2026

---

## Epic 1 : Setup & Infrastructure Projet

### Story 1.1 : Initialiser le projet Next.js

**Context :**
Le projet demarre de zero. On a besoin d'un projet Next.js 14 avec TypeScript et Tailwind CSS, configure pour tourner sur le VPS Hetzner.

**User Story :**
En tant que developpeur,
je veux initialiser le projet Next.js avec les bonnes dependances,
afin d'avoir une base fonctionnelle pour construire le flyer.

**Acceptance Criteria :**
- [ ] AC#1 : Le projet Next.js 14 est cree avec TypeScript et Tailwind CSS
- [ ] AC#2 : La palette de couleurs custom est configuree dans tailwind.config.ts
- [ ] AC#3 : La police Inter est importee et configuree
- [ ] AC#4 : Le fichier globals.css contient les styles de base et les styles print
- [ ] AC#5 : Le projet compile sans erreur (`npm run build`)

**Tasks :**
1. Creer le projet Next.js avec `create-next-app` (AC: #1)
2. Configurer les couleurs flyer-* dans tailwind.config.ts (AC: #2)
3. Importer la police Inter via next/font (AC: #3)
4. Ajouter les styles globaux et les regles @media print (AC: #4)
5. Verifier la compilation (AC: #5)

**Prerequisites :**
- [ ] Node.js installe sur le serveur
- [ ] Git repo initialise avec remote configure

**Estimated Complexity :** Low

---

### Story 1.2 : Configurer le repository Git et le deploiement

**Context :**
Le code doit etre versionne sur GitHub et deploye sur le VPS Hetzner.

**User Story :**
En tant que developpeur,
je veux que le repo Git soit connecte au remote et que les push fonctionnent,
afin de versionner et deployer le code.

**Acceptance Criteria :**
- [ ] AC#1 : Le repo local est connecte au remote GitHub
- [ ] AC#2 : Un premier commit est pousse avec succes sur `main`
- [ ] AC#3 : Le .gitignore exclut node_modules, .next, et fichiers temporaires

**Tasks :**
1. Verifier la connexion au remote (AC: #1)
2. Creer un .gitignore adapte Next.js (AC: #3)
3. Faire le commit initial et push (AC: #2)

**Dependencies :** Story 1.1

**Estimated Complexity :** Low

---

## Epic 2 : Structure & Layout du Flyer

### Story 2.1 : Creer le conteneur principal du flyer (format A4)

**Context :**
Le flyer est un document a dimensions fixes (1080x1528px, ratio A4) centre sur la page. Il doit servir de conteneur racine pour tous les composants.

**User Story :**
En tant qu'utilisateur,
je veux voir un conteneur blanc de format A4 centre sur la page,
afin d'avoir la base visuelle du flyer.

**Acceptance Criteria :**
- [ ] AC#1 : Le composant Flyer.tsx affiche un conteneur de 1080x1528px
- [ ] AC#2 : Le conteneur est centre horizontalement sur la page
- [ ] AC#3 : Le fond est blanc avec overflow hidden
- [ ] AC#4 : Le composant page.tsx affiche le Flyer centre sur un fond neutre

**Tasks :**
1. Creer le composant Flyer.tsx avec dimensions fixes (AC: #1, #3)
2. Creer page.tsx avec centrage du flyer (AC: #2, #4)
3. Creer layout.tsx avec metadonnees (AC: #4)

**Estimated Complexity :** Low

---

### Story 2.2 : Implementer les formes decoratives d'arriere-plan

**Context :**
Le flyer de reference utilise des formes geometriques (courbes, vagues violettes/grises) pour creer du dynamisme visuel. Ces formes sont en arriere-plan, derriere le contenu.

**User Story :**
En tant qu'utilisateur,
je veux voir des formes decoratives dynamiques en arriere-plan du flyer,
afin que le design soit visuellement impactant comme le modele de reference.

**Acceptance Criteria :**
- [ ] AC#1 : Des courbes/vagues violettes sont visibles en haut du flyer
- [ ] AC#2 : Des formes grises/violettes sont presentes au milieu-droite
- [ ] AC#3 : Une forme decorative encadre la zone footer
- [ ] AC#4 : Les formes sont en z-index bas (derriere le contenu textuel)
- [ ] AC#5 : Les formes utilisent clip-path, border-radius ou SVG (pas d'images)

**Tasks :**
1. Creer DecorativeShapes.tsx avec les formes en position absolute (AC: #1, #2, #3)
2. Appliquer les couleurs violet/gris de la palette (AC: #1, #2)
3. Verifier le z-index et le positionnement (AC: #4, #5)

**Dependencies :** Story 2.1

**Estimated Complexity :** Medium

---

## Epic 3 : Sections de Contenu

### Story 3.1 : Implementer la Hero Section

**Context :**
La hero section occupe ~40% du haut du flyer. Elle contient le titre accrocheur "DEMENAGEMENT ?", le sous-titre, et la photo reelle de la camionnette integree dans le design.

**User Story :**
En tant qu'utilisateur,
je veux voir un titre massif et accrocheur avec la photo de la camionnette,
afin que le flyer capte immediatement l'attention.

**Acceptance Criteria :**
- [ ] AC#1 : Le titre "DEMENAGEMENT ?" est affiche en ExtraBold, grande taille, majuscules
- [ ] AC#2 : Le sous-titre "Vous bougez, on transporte !" est visible sous le titre
- [ ] AC#3 : La photo camionnette (public/images/camionnette.jpg) est affichee a droite
- [ ] AC#4 : La photo est integree avec un clip-path ou mask (pas un rectangle brut)
- [ ] AC#5 : Un badge/logo "Elvis Transport & Demenagement" est visible en haut
- [ ] AC#6 : La section occupe environ 40% de la hauteur du flyer

**Tasks :**
1. Creer HeroSection.tsx avec le titre et sous-titre (AC: #1, #2)
2. Integrer la photo camionnette avec clip-path (AC: #3, #4)
3. Ajouter le badge du nom du service (AC: #5)
4. Ajuster les proportions (~40% hauteur) (AC: #6)

**Prerequisites :**
- [ ] Photo camionnette disponible dans public/images/

**Dependencies :** Story 2.1, Story 2.2

**Estimated Complexity :** High

---

### Story 3.2 : Implementer la section Services

**Context :**
Liste des 5 services proposes avec des checkmarks verts, presentee de maniere claire et compacte.

**User Story :**
En tant qu'utilisateur,
je veux voir la liste des services proposes clairement,
afin de comprendre rapidement ce qui est offert.

**Acceptance Criteria :**
- [ ] AC#1 : Le titre "NOS SERVICES" est affiche en violet bold majuscules
- [ ] AC#2 : Les 5 services sont listes avec des checkmarks verts (#22C55E)
- [ ] AC#3 : Les checkmarks sont des SVG inline
- [ ] AC#4 : La section est visuellement delimitee (fond grise ou bordure)

**Tasks :**
1. Creer ServicesSection.tsx avec titre et liste (AC: #1, #2)
2. Creer les icones checkmark en SVG inline (AC: #3)
3. Styliser la section avec fond/delimiteur (AC: #4)

**Dependencies :** Story 2.1

**Estimated Complexity :** Low

---

### Story 3.3 : Implementer la section CTA (Call to Action)

**Context :**
Le numero de telephone doit etre le texte le PLUS VISIBLE de tout le flyer. Il est affiche dans un bandeau orange vif avec un message d'appel a l'action.

**User Story :**
En tant qu'utilisateur,
je veux que le numero de telephone soit immediatement reperable,
afin de pouvoir contacter le service facilement.

**Acceptance Criteria :**
- [ ] AC#1 : Le numero "0488 48 66 58" est le texte le plus gros du flyer (48-56px ExtraBold)
- [ ] AC#2 : Le texte "Appelez pour un devis gratuit !" est affiche au-dessus du numero
- [ ] AC#3 : La section a un fond orange vif (#FF6B00)
- [ ] AC#4 : Le contraste texte blanc / fond orange est fort et lisible
- [ ] AC#5 : Une icone telephone SVG accompagne le numero

**Tasks :**
1. Creer CTASection.tsx avec le bandeau orange (AC: #3, #4)
2. Afficher le numero en tres grande taille (AC: #1)
3. Ajouter le texte CTA et l'icone telephone (AC: #2, #5)

**Dependencies :** Story 2.1

**Estimated Complexity :** Low

---

### Story 3.4 : Implementer la section "Pourquoi Nous"

**Context :**
Section presentant les 4 avantages concurrentiels du service avec des checkmarks orange.

**User Story :**
En tant qu'utilisateur,
je veux voir les avantages du service,
afin d'etre convaincu de faire appel a ce prestataire.

**Acceptance Criteria :**
- [ ] AC#1 : Le titre "POURQUOI NOUS ?" est affiche en violet bold
- [ ] AC#2 : Les 4 avantages sont listes avec checkmarks orange
- [ ] AC#3 : Le texte est lisible et bien espace

**Tasks :**
1. Creer WhyUsSection.tsx avec titre et liste (AC: #1, #2)
2. Styliser les checkmarks en orange (AC: #2, #3)

**Dependencies :** Story 2.1

**Estimated Complexity :** Low

---

### Story 3.5 : Implementer le Footer

**Context :**
Bande sobre en bas du flyer avec le nom du service, la zone de couverture et le numero de telephone.

**User Story :**
En tant qu'utilisateur,
je veux voir les coordonnees en bas du flyer,
afin de retrouver facilement les informations de contact.

**Acceptance Criteria :**
- [ ] AC#1 : Le nom "Elvis Transport & Demenagement" est affiche
- [ ] AC#2 : La zone "Liege et environs" est mentionnee
- [ ] AC#3 : Le numero de telephone est repete
- [ ] AC#4 : Le fond est legerement colore (gris ou violet clair)
- [ ] AC#5 : Le style est sobre et compact

**Tasks :**
1. Creer FooterSection.tsx avec les coordonnees (AC: #1, #2, #3)
2. Styliser le fond et la mise en page (AC: #4, #5)

**Dependencies :** Story 2.1

**Estimated Complexity :** Low

---

## Epic 4 : Polish & Impression

### Story 4.1 : Optimiser l'impression A4

**Context :**
Le flyer doit pouvoir etre imprime sur une feuille A4 via Ctrl+P. Le resultat imprime doit etre fidele au rendu ecran.

**User Story :**
En tant qu'utilisateur,
je veux imprimer le flyer sur A4 via Ctrl+P,
afin de distribuer des copies physiques.

**Acceptance Criteria :**
- [ ] AC#1 : Le flyer tient sur une seule page A4
- [ ] AC#2 : Les couleurs de fond sont imprimees (print-color-adjust: exact)
- [ ] AC#3 : Le flyer est centre sur la page A4
- [ ] AC#4 : Pas de saut de page ni d'element coupe
- [ ] AC#5 : Le resultat est fidele au rendu ecran

**Tasks :**
1. Configurer @page et @media print dans globals.css (AC: #1, #2, #3)
2. Ajouter le scale transform pour adapter 1080px a la largeur A4 (AC: #1, #3)
3. Tester l'apercu d'impression (AC: #4, #5)

**Dependencies :** Toutes les stories de l'Epic 3

**Estimated Complexity :** Medium

---

### Story 4.2 : Polish visuel et coherence design

**Context :**
Ajustements finaux pour que le flyer soit aussi impactant que le modele de reference.

**User Story :**
En tant qu'utilisateur,
je veux un flyer visuellement professionnel et impactant,
afin qu'il attire l'attention et inspire confiance.

**Acceptance Criteria :**
- [ ] AC#1 : Le design est coherent et professionnel
- [ ] AC#2 : Les formes decoratives sont equilibrees et harmonieuses
- [ ] AC#3 : La hierarchie visuelle est respectee (titre > numero > services > reste)
- [ ] AC#4 : Pas d'erreurs console
- [ ] AC#5 : Tous les textes sont lisibles et bien espaces

**Tasks :**
1. Revoir l'alignement et les espacements de chaque section (AC: #1, #5)
2. Ajuster les formes decoratives si necessaire (AC: #2)
3. Verifier la hierarchie typographique (AC: #3)
4. Verifier la console navigateur (AC: #4)

**Dependencies :** Story 4.1

**Estimated Complexity :** Medium

---

## Ordre d'implementation recommande

```
Story 1.1 (Setup Next.js)
  |
Story 1.2 (Git & deploy)
  |
Story 2.1 (Conteneur Flyer)
  |
  +---> Story 2.2 (Formes decoratives)
  |       |
  |       v
  +---> Story 3.1 (Hero Section)
  |
  +---> Story 3.2 (Services)
  |
  +---> Story 3.3 (CTA)
  |
  +---> Story 3.4 (Why Us)
  |
  +---> Story 3.5 (Footer)
          |
          v
        Story 4.1 (Print A4)
          |
          v
        Story 4.2 (Polish)
```
