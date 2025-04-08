export class VoitureOptionsModel {
  constructor(
    AirConditionne = false,
    Cuir = false,
    GPS = false,
    ToitOuvrant = false,
    Bluetooth = false,
    CameraDeRecul = false,
    SiegesChauffants = false,
    ControleDeStabilite = false,
    VitresElectriques = false,
    AssistanceAuStationnement = false
  ) {
    this.AirConditionne = AirConditionne;
    this.Cuir = Cuir;
    this.GPS = GPS;
    this.ToitOuvrant = ToitOuvrant;
    this.Bluetooth = Bluetooth;
    this.CameraDeRecul = CameraDeRecul;
    this.SiegesChauffants = SiegesChauffants;
    this.ControleDeStabilite = ControleDeStabilite;
    this.VitresElectriques = VitresElectriques;
    this.AssistanceAuStationnement = AssistanceAuStationnement;
  }
}