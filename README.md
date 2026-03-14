# Site web de club de karaté

Site web du club de karaté **Le Mée Sport Karaté**, réalisé avec Next.js dans le cadre d'un apprentissage en autodidacte.

---

## Description

Ce projet est le site vitrine du club. Il a pour objectif de présenter le club, ses actualités, ses cours et tarifs, sa galerie photo, ainsi que les informations de contact.

Il me sert également de terrain d'apprentissage pour **React**, **Next.js** et **TypeScript**.

---

## Technologies utilisées

- [Next.js 15](https://nextjs.org/) — framework React
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

---

## Structure du projet

```
site-club-karate/
├── app/                          # Routing Next.js
│   ├── globals.css               # Styles globaux (Tailwind)
│   ├── layout.tsx                # Layout global
│   ├── page.tsx                  # Page d'accueil (SPA scrollable)
│   ├── actualites/
│   │   ├── page.tsx              # Liste des actualités
│   │   └── [slug]/
│   │       └── page.tsx          # Détail d'une actualité
│   ├── cours-tarifs/
│   │   └── page.tsx
│   ├── galerie/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/                   # Composants présents sur toutes les pages
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                 # Sections de la homepage
│   │   ├── Hero.tsx
│   │   └── ActuHome.tsx
│   └── ui/                       # Composants génériques réutilisables
│       └── Button.tsx
│
└── public/                       # Assets statiques
    └── images/
        ├── home/
        └── galerie/
```
---

## Pages prévues

- [x] Accueil (Hero + Actualités)
- [ ] Actualités
- [ ] Cours et Tarifs
- [ ] Galerie
- [ ] Contact

---

## Installation & lancement

Le projet est encore en cours de développement. Les instructions d'installation seront ajoutées prochainement.

---

Projet personnel réalisé en apprenant Next.js. Les retours et suggestions sont les bienvenus !
