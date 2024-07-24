# Simulation de Tondeuse à gazon Automatique

Note : Ce projet utilise pnpm pour la gestion des dépendances. Si vous ne souhaitez pas installer pnpm manuellement et que vous avez déjà Docker installé, suivez les instructions ci-dessous pour exécuter le projet avec Docker.

Ce projet simule le déplacement de tondeuses automatiques sur une pelouse rectangulaire en suivant des instructions fournies via un fichier texte.

## Structure du Projet

```bash
src/
|-- models/
| |-- Tondeuse.ts
|
|-- utils/
| |-- parseFileContent.ts
| |-- parseGridDimensions.ts
| |-- parseInitialPosition.ts
|
|-- App.css
|-- App.tsx
|-- main.tsx
```

### Description des fichiers

- **src/models/Tondeuse.ts** : Contient la classe `Tondeuse` qui encapsule le comportement de la tondeuse (rotation, déplacement, traitement des instructions).
- **src/utils/parseFileContent.ts** : Fonction pour analyser le contenu du fichier et extraire les lignes.
- **src/utils/parseGridDimensions.ts** : Fonction pour analyser les dimensions de la grille à partir de la première ligne du fichier.
- **src/utils/parseInitialPosition.ts** : Fonction pour analyser la position initiale et la direction d'une tondeuse.
- **src/App.tsx** : Composant principal de l'application React. Contient la logique pour charger le fichier, traiter les instructions et afficher les résultats.
- **src/main.tsx** : Point d'entrée de l'application React.

### Fonctionnalités

- **Classe `Tondeuse`** :

  - `rotateLeft` : Pivote la tondeuse de 90 degrés à gauche.
  - `rotateRight` : Pivote la tondeuse de 90 degrés à droite.
  - `moveForward` : Avance la tondeuse d'une case dans sa direction actuelle.
  - `processInstructions` : Traite une série d'instructions pour la tondeuse.
  - `getPosition` : Renvoie la position et la direction actuelle de la tondeuse.

- **Fonctions utilitaires** :
  - `parseFileContent` : Analyse le contenu du fichier et retourne les lignes non vides.
  - `parseGridDimensions` : Analyse les dimensions de la grille à partir de la première ligne du fichier.
  - `parseInitialPosition` : Analyse la position initiale et la direction d'une tondeuse.

### Format du fichier d'entrée

Le fichier `tondeuse.txt` doit être placé dans le répertoire public et avoir le format suivant :

```bash
55
44 S
LFRRFFLFRFF
22 N
FFRLLRFRLF

```

- La première ligne contient les dimensions de la grille (par exemple, `5 5`).
- Les lignes suivantes contiennent, pour chaque tondeuse, une ligne avec la position initiale et la direction, et une ligne avec les instructions de déplacement.

### Instructions pour exécuter le projet

#### Avec Docker

Si vous avez déjà Docker installé sur votre machine et que vous ne souhaitez pas installer pnpm manuellement, vous pouvez utiliser les fichiers Dockerfile et docker-compose.yml déjà présents dans le projet. Suivez ces étapes :

1. Clonez le dépôt :

```bash
git clone https://github.com/tarik-gadoumi/test.git
cd test
```

2. Placez le fichier tondeuse.txt dans le répertoire public.

3. Construisez l'image Docker et démarrez le conteneur :

```bash
docker compose up --build
```

4. Ouvrez http://localhost:5173 pour voir l'application dans votre navigateur.

#### Sans Docker

1. Clonez le dépôt :

```bash
git clone https://github.com/tarik-gadoumi/test.git
cd test
```

2. Installez les dépendances :

```bash
pnpm install
```

3. Placez le fichier tondeuse.txt dans le répertoire public.

4. Démarrez l'application :

```bash
pnpm run dev
```

5. Ouvrez http://localhost:5173 pour voir l'application dans votre navigateur.

---

Si vous avez des questions ou des commentaires, n'hésitez pas à me contacter.
