// Cette classe permet de gérer le stockage de données JSON dans le localStorage du navigateur
// Pour écrire directement dans le fichier d'origine, il faudrait utiliser une API permettant de manipuler les fichiers d'entrées /sorties

export class StockageJSONController {
  constructor(storageKey) {
    this.storageKey = storageKey; // Clé utilisée pour identifier les données dans le localStorage
  }

  // Méthode pour lire les données JSON depuis le localStorage
  readJSONData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : []; // Retourne les données parsées ou un tableau vide si aucune donnée n'existe
  }

  // Méthode pour écrire un tableau d'objets dans le localStorage
  writeJSONData(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Méthode pour ajouter un nouvel objet à la liste dans le localStorage
  addObject(newObject) {
    const data = this.readJSONData(); // Récupère les données existantes
    data.push(newObject); // Ajoute le nouvel objet
    this.writeJSONData(data); // Sauvegarde les données mises à jour
  }
}