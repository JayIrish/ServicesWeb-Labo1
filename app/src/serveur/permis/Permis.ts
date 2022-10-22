export class Permis {
    Permis_Numéro : string;
    Permis_Date_de_début : string;
    Permis_Date_de_fin : string;
    Gardien_Territoire_ex_villes : string;
    Animal_Type_de_permis : string;
    Animal_Nom : string;
    Animal_Catégorie_race_primaire_de_chiens : string;
    Animal_Race_primaire_des_chiens : string;
    Animal_Race_croisé_des_chiens : string;
    Animal_Sexe : string;
    Animal_Couleur : string;
    Animal_Date_de_naissance : string;
    Animal_Vaccination : number;
    Animal_Stérilisation : number;
    Animal_Poids_kg : number;
    Animal_Micropuce : number;
    Animal_Potentiellement_dangereux : number;

  constructor(
    Permis_Numéro : string,
    Permis_Date_de_début : string,
    Permis_Date_de_fin : string,
    Gardien_Territoire_ex_villes : string,
    Animal_Type_de_permis : string,
    Animal_Nom : string,
    Animal_Catégorie_race_primaire_de_chiens : string,
    Animal_Race_primaire_des_chiens : string,
    Animal_Race_croisé_des_chiens : string,
    Animal_Sexe : string,
    Animal_Couleur : string,
    Animal_Date_de_naissance : string,
    Animal_Vaccination : number,
    Animal_Stérilisation : number,
    Animal_Poids_kg : number,
    Animal_Micropuce : number,
    Animal_Potentiellement_dangereux : number
  ) {
    this.Permis_Numéro = Permis_Numéro;
    this.Permis_Date_de_début = Permis_Date_de_début;
    this.Permis_Date_de_fin = Permis_Date_de_fin;
    this.Gardien_Territoire_ex_villes = Gardien_Territoire_ex_villes;
    this.Animal_Type_de_permis = Animal_Type_de_permis;
    this.Animal_Nom = Animal_Nom;
    this.Animal_Catégorie_race_primaire_de_chiens = Animal_Catégorie_race_primaire_de_chiens;
    this.Animal_Race_primaire_des_chiens = Animal_Race_primaire_des_chiens;
    this.Animal_Race_croisé_des_chiens = Animal_Race_croisé_des_chiens;
    this.Animal_Sexe = Animal_Sexe;
    this.Animal_Couleur = Animal_Couleur;
    this.Animal_Date_de_naissance = Animal_Date_de_naissance;
    this.Animal_Vaccination = Animal_Vaccination;
    this.Animal_Stérilisation = Animal_Stérilisation;
    this.Animal_Poids_kg = Animal_Poids_kg;
    this.Animal_Micropuce = Animal_Micropuce;
    this.Animal_Potentiellement_dangereux = Animal_Potentiellement_dangereux;
  }
}
