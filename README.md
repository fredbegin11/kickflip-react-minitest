# Mini Test Technique React

Vous pouvez prendre le temps que vous avez besoin et vous pouvez également installer des librairies supplémentaires, à votre guise.

##### Setup du projet

1. Pull le repo https://github.com/fredbegin11/kickflip-react-minitest
2. `npm install`
3. `npm start`

##### À faire

1. Dans le fichier `App.tsx`, ajouter le code nécessaire pour aller chercher une liste de produit en utilisant le endpoint `https://dummyjson.com/products`.

2. Afficher les produits (le retour de l'endpoint) dans une grille de "cards":

   - La grille doit avoir 3 colonnes de large
   - **Pas besoin** de supporter l'affichage mobile

3. Chacune des "cards" doit afficher les informations suivantes:

   - nom de la compagnie
   - nom du produit
   - description
   - prix (2 chiffres après la virgule)
   - thumbnail

4. Implémenter une recherche de produits côté "front-end". La recherche doit:
   - Rechercher sur le nom de la compagnie et le nom du produit
   - Ne pas être sensible à la casse (case-insensitive)
   - Ne pas tenir compte des accents (ex: é, ê et è doivent être considéré comme des e)
   - Ne pas tenir compte des espaces en début et en fin de la recherche

Bonus: Ajouter les tests pertinents pour la fonction de recherche avec jest

<br/>

Pour le visuel, vous pouvez regarder le `basic-example.png` dans le dossier example pour vous inspirer, ça peut rester bien simple!

#### Remise

Une fois terminé, vous pouvez m'envoyer un .zip avec le repo (sans les nodes_modules).

GLHF!
