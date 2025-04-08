// Cette classe représente un modèle de voiture

export class VoitureModel {
  constructor(
    Marque,
    Modele,
    Annee,
    Couleur,
    Transmission,
    Options,
    URL
  ) {
    this.Marque = Marque;
    this.Modele = Modele;
    this.Annee = Annee;
    this.Couleur = Couleur;
    this.Transmission = Transmission;
    this.Options = Options;
    this.URL = URL;
  }
}