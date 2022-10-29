import { Request, Response } from "express";
import path from "path";
import { open } from "node:fs/promises";
import { Permis } from "./Permis";


const chargerFichierJsonEnObjetJson = async (): Promise<Array<Permis>> => {
  //let auteur = req.body.auteur;
  let cheminFichier = path.join(__dirname, "../donnees/permis-animaux.json");
  let listePermis: Array<Permis> = [];
  try {
    let fichier = await open(cheminFichier);
    const contenu = await fichier.readFile("utf-8");
    fichier.close();
    listePermis = JSON.parse(contenu);
  } catch (e: any) {
  } finally {
    return listePermis;
  }
};

export const listePermisType = async (req: Request): Promise<string> => {
  let listePermis: Array<Permis> = await chargerFichierJsonEnObjetJson();
  let typeCherche = req.body.typeRecherche;

  let listePermisType: Array<Permis> = [];

  for (let unPermis of listePermis) {
    if (unPermis.Animal_Type_de_permis == typeCherche) {
      listePermisType.push(unPermis);
    }
  }
  return JSON.stringify(listePermisType);
};

export const listePermisTerr = async (req: Request): Promise<string> => {
  let listePermis: Array<Permis> = await chargerFichierJsonEnObjetJson();
  let terrCherche = req.body.terrRecherche;

  let listePermisTerr: Array<Permis> = [];

  for (let unPermis of listePermis) {
    if (unPermis.Gardien_Territoire_ex_villes == terrCherche) {
      listePermisTerr.push(unPermis);
    }
  }
  return JSON.stringify(listePermisTerr);
};

export const listePermisEcheance = async (req: Request): Promise<string> => {
  let listePermis: Array<Permis> = await chargerFichierJsonEnObjetJson();
  let anneeCherche = req.body.anneeRecherche;
  let moisCherche = req.body.moisRecherche;

  let listePermisEcheance: Array<Permis> = [];

  for (let unPermis of listePermis) {
    let dateFin: Array<String> = (unPermis.Permis_Date_de_fin).split("-");
    let annee = dateFin[0];
    let mois = dateFin[1];
    if (mois == moisCherche && annee == anneeCherche) {
      listePermisEcheance.push(unPermis);
    }
  }
  return JSON.stringify(listePermisEcheance);
};

export const listeClasseeDesPermis = async (req: Request): Promise<string> => {
  let listePermis: Array<Permis> = await chargerFichierJsonEnObjetJson();

  listePermis.sort((a, b) => {
    if (a.Animal_Type_de_permis < b.Animal_Type_de_permis) {
      return -1;
    }
    if (a.Animal_Type_de_permis > b.Animal_Type_de_permis) {
      return 1;
    }
    return 0;
  });

  return JSON.stringify(listePermis);
};
