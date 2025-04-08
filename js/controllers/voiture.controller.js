// Cette classe permet de créer et manipuler des objets voiture

import { VoitureModel } from '../models/voiture.model.js';
import { StockageJSONController } from './stockage-json.controller.js';

export class VoitureController {
  constructor(storageKey) {
    // Initialisation du contrôleur de stockage pour gérer les voitures
    this.stockage = new StockageJSONController(storageKey);
  }

  // Méthode pour créer une nouvelle voiture
  creerVoiture(marque, modele, annee, couleur, transmission, options, url) {
    const nouvelleVoiture = new VoitureModel(
      marque,
      modele,
      annee,
      couleur,
      transmission,
      options,
      url
    );
    this.stockage.addObject(nouvelleVoiture); // Ajoute la voiture au stockage
    return nouvelleVoiture;
  }

  // Méthode pour récupérer toutes les voitures
  obtenirToutesLesVoitures() {
    return this.stockage.readJSONData(); // Retourne toutes les voitures stockées
  }

  // Méthode pour rechercher une voiture par son ID (ou autre critère)
  rechercherVoiture(critere, valeur) {
    const voitures = this.obtenirToutesLesVoitures();
    return voitures.find((voiture) => voiture[critere] === valeur); // Retourne la voiture correspondante
  }

  // Méthode pour supprimer une voiture par son ID (ou autre critère)
  supprimerVoiture(critere, valeur) {
    const voitures = this.obtenirToutesLesVoitures();
    const voituresFiltrees = voitures.filter((voiture) => voiture[critere] !== valeur);
    this.stockage.writeJSONData(voituresFiltrees); // Met à jour le stockage
  }

  // Méthode pour mettre à jour une voiture existante
  mettreAJourVoiture(critere, valeur, nouvellesDonnees) {
    const voitures = this.obtenirToutesLesVoitures();
    const index = voitures.findIndex((voiture) => voiture[critere] === valeur);
    if (index !== -1) {
      voitures[index] = { ...voitures[index], ...nouvellesDonnees }; // Fusionne les nouvelles données
      this.stockage.writeJSONData(voitures); // Sauvegarde les modifications
    }
  }
}