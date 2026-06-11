# 🚀 Appli-Web-React

Une application web moderne construite avec **React 19** et **Vite**, offrant une expérience de développement rapide et un rendu performant.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-57.2%25-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-41.1%25-1572B6?logo=css3&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ Fonctionnalités

- ⚡ **Vite** - Build tool ultra-rapide avec Hot Module Replacement (HMR)
- ⚛️ **React 19** - Dernière version de React avec les dernières fonctionnalités
- 🛣️ **React Router v7** - Navigation et routage avancés
- 🔧 **React Compiler** - Optimisations automatiques de performance
- 📝 **ESLint** - Linting configuré pour garantir la qualité du code
- 🎨 **Styling Modern** - CSS moderne (57.2%) avec une architecture CSS bien structurée

## 📋 Table des matières

- [Installation](#-installation)
- [Démarrage rapide](#-démarrage-rapide)
- [Structure du projet](#-structure-du-projet)
- [Scripts disponibles](#-scripts-disponibles)
- [Technologies utilisées](#-technologies-utilisées)
- [Configuration](#-configuration)
- [Développement](#-développement)
- [Build pour la production](#-build-pour-la-production)
- [Contribution](#-contribution)

## 🔧 Installation

### Prérequis

- **Node.js** (v18 ou supérieur)
- **npm** ou **yarn**

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/Justhiraga/Appli-Web-React.git
cd Appli-Web-React
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

## 🚀 Démarrage rapide

### Mode développement

Lancer l'application en mode développement avec HMR (Hot Module Replacement) :

```bash
npm run dev
```

L'application sera accessible à `http://localhost:5173`

### Mode production

Générer un build optimisé pour la production :

```bash
npm run build
```

### Aperçu du build

Visualiser le build en local avant le déploiement :

```bash
npm run preview
```

## 📁 Structure du projet

```
Appli-Web-React/
├── src/
│   ├── components/          # Composants React réutilisables
│   ├── pages/              # Pages de l'application
│   ├── styles/             # Fichiers CSS
│   ├── App.jsx             # Composant principal
│   └── main.jsx            # Point d'entrée
├── public/                 # Fichiers statiques
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
├── eslint.config.js        # Configuration ESLint
└── README.md              # Cette documentation
```

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement avec HMR |
| `npm run build` | Crée un build optimisé pour la production |
| `npm run preview` | Prévisualise le build en local |
| `npm run lint` | Vérifie la qualité du code avec ESLint |

## 🛠️ Technologies utilisées

### Frontend
- **React 19.1.1** - Bibliothèque UI
- **React Router 7.9.3** - Routage et navigation
- **React DOM 19.1.1** - Rendu DOM

### Build & Tooling
- **Vite 7.1.7** - Build tool et dev server
- **Babel** - Transpilation JavaScript (via React plugin)

### Linting & Quality
- **ESLint 9.36.0** - Linter JavaScript
- **ESLint Plugin React Hooks** - Règles pour les hooks React
- **ESLint Plugin React Refresh** - Optimisations Fast Refresh

### Development
- **@vitejs/plugin-react** - Plugin React pour Vite
- **@types/react** - Types TypeScript pour React
- **babel-plugin-react-compiler** - Compilateur React optimisé

## ⚙️ Configuration

### Vite (`vite.config.js`)

La configuration par défaut inclut :
- Plugin React optimisé
- Support HMR
- Compilation React Compiler activée

### ESLint

ESLint est configuré pour vérifier :
- Les règles JavaScript modernes
- Les hooks React
- Les pratiques recommandées React Refresh

Pour exécuter le lint :
```bash
npm run lint
```

## 💻 Développement

### Hot Module Replacement (HMR)

Vite offre un HMR ultra-rapide permettant de voir les modifications en temps réel sans perdre l'état de l'application.

### React Compiler

Le React Compiler est **activé** sur ce template pour optimiser automatiquement vos composants. Consultez la [documentation officielle](https://react.dev/learn/react-compiler) pour plus de détails.

### Bonnes pratiques

- Utilisez des composants fonctionnels
- Exploitez les hooks React (useState, useEffect, useContext, etc.)
- Respectez les règles ESLint configurées
- Organisez vos composants par feature/module

## 📦 Build pour la production

Pour créer un build optimisé pour la production :

```bash
npm run build
```

Le build produit sera généré dans le dossier `dist/`. Vous pouvez le prévisualiser avec :

```bash
npm run preview
```

### Optimisations incluses

- Minification et compression du code
- Tree-shaking des modules inutilisés
- Code splitting automatique
- Optimisation des assets

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. **Fork** le repository
2. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Directives de contribution

- Suivez les conventions de codage ESLint
- Testez votre code avant de soumettre une PR
- Mettez à jour la documentation si nécessaire
- Écrivez des commits clairs et descriptifs

## 📝 Ressources utiles

- [Documentation React](https://react.dev/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation React Router](https://reactrouter.com/)
- [Documentation ESLint](https://eslint.org/)
- [Babel Documentation](https://babeljs.io/)

## 👤 Auteur

**Justhiraga**
- GitHub: [@Justhiraga](https://github.com/Justhiraga)

## 📄 License

Ce projet est sous license MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Créé le**: 2 octobre 2025  
**Dernière mise à jour**: 3 novembre 2025

Fait avec ❤️ par Justhiraga
