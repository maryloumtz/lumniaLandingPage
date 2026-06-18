Tu es Codex. Tu dois créer une landing page moderne, propre et responsive pour le projet **Lumnia**.

## Contexte du projet

**Lumnia** est une application mobile d’organisation douce et non culpabilisante.
L’objectif est d’aider l’utilisateur à mieux organiser son quotidien sans pression, avec une approche claire, apaisante et bienveillante.

L’application mobile est pensée autour de plusieurs grands modules :

* **Agenda** : planifier ses journées, ses événements et ses tâches importantes.
* **Repas** : organiser ses repas de la semaine simplement.
* **Sport** : suivre ou prévoir des activités sportives sans logique culpabilisante.
* **Communauté** : favoriser l’entraide, l’échange et la motivation douce.
* **Covoiturage** : faciliter l’organisation de trajets partagés.
* **Lumnia AI** : un assistant intelligent qui accompagne l’utilisateur dans son organisation.

La landing page doit présenter l’application, expliquer ce qu’elle fait, donner envie de la télécharger, et prévoir des boutons d’accès vers l’application mobile.

## Objectif

Créer une **landing page one-page** pour Lumnia, avec un rendu professionnel, doux, moderne et crédible.

La page doit pouvoir servir de vitrine pour le projet dans un contexte scolaire/projet de fin d’année.

Elle doit être claire, esthétique et structurée, sans être trop chargée.

## Stack technique

Utilise la stack existante du projet.

Si le projet est un projet Next.js avec Tailwind, utilise :

* Next.js App Router
* TypeScript
* Tailwind CSS
* `app/page.tsx`
* `app/layout.tsx` si besoin
* `app/globals.css` si besoin

Avant de modifier, inspecte la structure existante du projet.

Ne casse pas la configuration actuelle.

N’ajoute pas de librairie inutile.
N’installe une dépendance que si elle est déjà présente dans le projet ou réellement nécessaire.

## Direction artistique

Le style doit être :

* doux
* clair
* moderne
* rassurant
* légèrement premium
* mobile-first
* cohérent avec une application d’organisation bienveillante

Palette recommandée :

* fond très clair : blanc cassé, gris bleuté très pâle
* accents bleu pastel
* touches violet doux ou lavande
* textes gris foncé / bleu nuit
* cartes blanches avec bordures très légères
* ombres douces
* coins arrondis

Évite un style trop flashy, trop corporate ou trop “startup générique”.
Le rendu doit donner une impression de calme, de clarté et de confiance.

## Contenu de la landing page

Créer les sections suivantes :

### 1. Header

Header fixe ou simple en haut de page avec :

* logo texte : **Lumnia**
* navigation :

  * Fonctionnalités
  * Application
  * FAQ
* bouton CTA : **Télécharger l’app**

Le header doit être responsive.
Sur mobile, prévoir une navigation simple, propre, ou un affichage compact.

### 2. Hero section

Section principale avec :

* un badge discret du type :
  “Organisation douce & intelligente”
* un titre fort :
  **Organise ton quotidien sans pression avec Lumnia**
* un sous-titre :
  “Agenda, repas, sport, communauté, covoiturage et assistant IA réunis dans une app pensée pour alléger ton quotidien.”
* deux CTA :

  * **Découvrir l’application**
  * **Télécharger bientôt**
* un visuel mockup de téléphone à droite ou en dessous sur mobile.

Le mockup de téléphone peut être créé en HTML/CSS directement.
Il doit montrer une fausse interface Lumnia avec quelques cartes :

* Aujourd’hui
* Repas de la semaine
* Sport doux
* Lumnia AI

Ne pas dépendre d’une image externe.

### 3. Section “Pourquoi Lumnia ?”

Présenter le problème que résout l’application.

Texte à intégrer ou reformuler :

“Les outils d’organisation sont souvent froids, complexes ou culpabilisants. Lumnia propose une approche plus douce : aider à planifier, anticiper et avancer, sans transformer chaque journée en performance.”

Ajouter 3 cartes :

* **Moins de charge mentale**
  Centralise les informations importantes du quotidien.

* **Une organisation plus fluide**
  Prépare tes repas, tes activités et tes trajets au même endroit.

* **Un accompagnement bienveillant**
  Lumnia AI aide à structurer sans juger ni mettre la pression.

### 4. Section fonctionnalités

Créer une grille de fonctionnalités avec les modules suivants :

1. **Agenda intelligent**
   Planifie tes journées, tes tâches et tes événements dans une interface claire.

2. **Repas de la semaine**
   Organise tes menus simplement pour éviter les décisions de dernière minute.

3. **Sport & routines**
   Prévois tes activités physiques avec une logique flexible et non culpabilisante.

4. **Communauté**
   Échange, partage et avance avec d’autres utilisateurs dans un cadre positif.

5. **Covoiturage**
   Organise des trajets partagés pour simplifier les déplacements.

6. **Lumnia AI**
   Profite d’un assistant intelligent pour t’aider à prioriser et structurer ton quotidien.

Chaque carte doit avoir un titre, une description courte et une petite icône simple.
Les icônes peuvent être faites avec des caractères, des SVG inline ou une librairie déjà installée si disponible.

### 5. Section aperçu application

Créer une section qui montre l’expérience utilisateur.

Inclure :

* un mockup téléphone plus grand ou une série de cartes UI
* un texte expliquant que Lumnia rassemble les besoins du quotidien dans une seule interface
* une mini-liste :

  * Vue claire de la journée
  * Suggestions adaptées
  * Modules connectés entre eux
  * Navigation simple et mobile-first

### 6. Section “Pensée pour le mobile”

Expliquer que Lumnia est d’abord une application mobile.

Texte possible :

“Lumnia est conçue pour accompagner l’utilisateur dans son quotidien, directement depuis son téléphone. L’interface privilégie la lisibilité, la rapidité d’accès et la simplicité d’usage.”

Ajouter deux boutons de téléchargement :

* **App Store**
* **Google Play**

Pour l’instant, les liens peuvent être des placeholders `#`.
Ajouter un petit texte : “Disponible prochainement”.

### 7. Section FAQ

Créer une FAQ courte avec 4 questions :

**Lumnia est-elle une application de productivité classique ?**
Non. Lumnia vise une organisation plus douce, sans pression ni logique de performance permanente.

**Lumnia AI remplace-t-elle l’utilisateur dans son organisation ?**
Non. L’assistant propose, structure et accompagne, mais l’utilisateur garde le contrôle.

**L’application est-elle pensée pour un usage quotidien ?**
Oui. Elle est conçue pour être consultée rapidement, plusieurs fois par jour si besoin.

**Lumnia est-elle déjà disponible ?**
La landing page prépare la présentation du projet. Les liens de téléchargement peuvent être branchés plus tard.

### 8. Footer

Footer simple avec :

* Lumnia
* courte phrase : “Organiser mieux, sans pression.”
* liens :

  * Fonctionnalités
  * Application
  * FAQ
* mention : “© 2026 Lumnia. Tous droits réservés.”

## Contraintes UI / UX

La page doit être :

* responsive desktop, tablette et mobile
* lisible
* fluide
* aérée
* accessible
* cohérente visuellement
* sans scroll horizontal
* sans éléments cassés sur petit écran

Utilise des sections avec des espacements propres.
Les CTA doivent être visibles.
Les textes doivent être hiérarchisés correctement.

Utilise des balises HTML sémantiques :

* `main`
* `section`
* `header`
* `footer`
* titres `h1`, `h2`, `h3`

Ajoute des attributs `aria-label` si nécessaire.

## Contraintes techniques

* Ne pas créer une architecture trop complexe.
* Ne pas ajouter de backend.
* Ne pas ajouter d’authentification.
* Ne pas ajouter de vraie logique de téléchargement.
* Ne pas utiliser d’images externes obligatoires.
* Ne pas casser les autres pages du projet.
* Ne pas supprimer du code existant sans raison.
* Ne pas modifier la configuration globale sauf nécessité.
* Garder un code propre, lisible et maintenable.

Si Tailwind est disponible, privilégier Tailwind pour le style.
Si Tailwind n’est pas configuré, utiliser le système de style déjà présent dans le projet.

## Travail attendu

1. Inspecter le projet.
2. Identifier la structure Next.js existante.
3. Créer ou modifier la page principale de landing.
4. Ajouter les composants nécessaires si cela améliore la lisibilité.
5. Ajouter ou ajuster les styles globaux si besoin.
6. Vérifier que la page compile.
7. Corriger les éventuelles erreurs TypeScript, ESLint ou build.
8. Fournir un résumé clair des fichiers modifiés.

## Critères d’acceptation

La tâche est réussie si :

* la landing page Lumnia s’affiche correctement
* le design est moderne, doux et professionnel
* toutes les sections demandées sont présentes
* la page est responsive
* le mockup mobile est visible et propre
* les CTA sont présents
* les liens App Store / Google Play sont prévus en placeholder
* le projet compile sans erreur
* le code est propre et compréhensible

## Ton du contenu

Le texte doit rester naturel, clair et professionnel.
Évite les formulations trop marketing agressives.
Lumnia doit donner une impression de calme, d’aide et de simplicité.

Ne pas écrire “booste ta productivité” ou “deviens enfin organisé”.
Préférer une formulation douce comme :

* “avance à ton rythme”
* “allège ton quotidien”
* “organise sans pression”
* “garde une vision claire”
* “retrouve une organisation plus fluide”

## Important

Le nom du projet est **Lumnia**.
Ne pas le renommer en Lumia.
Utiliser systématiquement **Lumnia** dans la landing page.
