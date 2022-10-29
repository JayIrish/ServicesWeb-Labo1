const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Numéro de permis</th>
                <th scope="col">Date de début</th>
                <th scope="col">Date de fin</th>
                <th scope="col">Gardien territoire</th>
                <th scope="col">Type de permis</th>
                <th scope="col">Nom de l'animal</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unPermis) =>{
    let tr=`<tr>
        <th>${unPermis.Permis_Numéro}</th>
        <td>${unPermis.Permis_Date_de_début}</td>
        <td>${unPermis.Permis_Date_de_fin}</td>
        <td>${unPermis.Gardien_Territoire_ex_villes}</td>
        <td>${unPermis.Animal_Type_de_permis}</td>
        <td>${unPermis.Animal_Nom}</td>
    </tr>`;
    return tr;
}

const  listesPourSelect = async (categ) => {
    let setTerrUnique = new Set();
    let setTypeUnique = new Set();
    let setAnneeUnique = new Set();
    let setMoisUnique = new Set();
    let setPermis = await chargerFichierJsonEnObjetJson();
    for (let unPermis of setPermis){
        let dateFin = (unPermis.Permis_Date_de_fin).split("-");
        let annee = dateFin[0];
        let mois = dateFin[1];

        switch(categ){
                case "Terr":
                    setTerrUnique.add(unPermis.Gardien_Territoire_ex_villes);
                    let listeTerrUnique = Array.from(setTerrUnique);
                    return listeTerrUnique, categ;
                case "Type": 
                    setTypeUnique.add(unPermis.Animal_Type_de_permis);
                    let listeTypeUnique = Array.from(setTypeUnique);
                    return listeTypeUnique, categ;
                case "Annee":
                    setAnneeUnique.add(annee);
                    let listeAnneeUnique = Array.from(setAnneeUnique);
                    return listeAnneeUnique, categ;
                case "Mois":
                    setMoisUnique.add(mois);
                    let listeMoisUnique = Array.from(setMoisUnique);
                    return listeMoisUnique, categ;
            }
    }
}

const creeSelect = (liste, type) =>{
    let select = `<select name="${type}" id="${type}" required>`
    for(uneOption of liste){
        select += `<option value="${uneOption}">${uneOption}</option>`
    }
    select = `</select>`
}

const afficher = (liste) => {
    let resultat = construireEntetes();
    for(let unPermis of liste){
        resultat += construireTR(unPermis);
    }
    resultat += "</tbody></table>";
    document.getElementsByClassName('container')[0].innerHTML = resultat;
}

let demanderType = () => {
    let select = creeSelect(listesPourSelect("Type"));
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="annee" class="form-label">Type de permis recherché</label>
            ${select}
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="button" onClick="listerParType();">Envoyer</button>
        </div>
    </form>
`;
 document.getElementsByClassName('container')[0].innerHTML = rep;
}

let demanderTerr = () => {
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="annee" class="form-label">Territoire du permis recherché</label>
            <input type="text" class="form-control" id="terr" name="terr" value="" required>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="button" onClick="listerParTerr();">Envoyer</button>
        </div>
    </form>
`;
 document.getElementsByClassName('container')[0].innerHTML = rep;
}

let demanderDates = () => {
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="annee" class="form-label">mois d'échéance recherché</label>
            <input type="text" class="form-control" id="anneeRecherche" name="anneeRecherche" value="" required>
        </div>
        <div class="col-md-6">
            <label for="annee" class="form-label">mois d'échéance recherché</label>
            <input type="text" class="form-control" id="moisRecherche" name="moisRecherche" value="" required>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="button" onClick="listerParEcheance();">Envoyer</button>
        </div>
    </form>
`;
 document.getElementsByClassName('container')[0].innerHTML = rep;
}