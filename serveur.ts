// Importation des modules nécessaires au fichier serveur.ts
import express from "express";
import { NextFunction, Request, Response } from "express";
import bodyParser = require("body-parser");
import http from "http";
import path from "path";

import { listePermisType } from "./app/src/serveur/permis/controleurPermis";
import { listePermisTerr } from "./app/src/serveur/permis/controleurPermis";
import { listePermisEcheance } from "./app/src/serveur/permis/controleurPermis";

// Création d'un serveur Node dont les requêtes entrantes
// et sortantes sont gérées par express.

const exp = express();
const serveur = http.createServer(exp);
const porte = 8383;
serveur.listen(porte); // Famille des 8080-8888
console.log(`\nServeur démarré sur le port ${porte}`);

// Pour obtenir les ressources statiques css, js, images, ...
// qui partiront avec vos pages web via les balises link, script, <img src=
exp.use(express.static(__dirname + "/app/src"));
// Support json encoded bodies
exp.use(bodyParser.json());
// Support text encoded bodies
exp.use(bodyParser.text());
// Support text encoded bodies
exp.use(express.urlencoded({ extended: true }));

//Traiter les requêtes provenant du client et les réponses à retourner au client
exp.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/app/src/index.html"));
});

exp.get("/permis", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/app/src/serveur/donnees/permis-animaux.json"));
});

exp.post("/typePermis", async (req: Request, res: Response) => {
  let listeTypePermis = await listePermisType(req);
  res.send(listeTypePermis);
});

exp.post("/terrPermis", async (req: Request, res: Response) => {
  let listeTerrPermis = await listePermisTerr(req);
  res.send(listeTerrPermis);
});

exp.post("/echeancePermis", async (req: Request, res: Response) => {
  let listeEcheancePermis = await listePermisEcheance(req);
  res.send(listeEcheancePermis);
});
