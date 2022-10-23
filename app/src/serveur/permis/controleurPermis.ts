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
//_____________________________________________________________________________________
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
//_____________________________________________________________________________________
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
