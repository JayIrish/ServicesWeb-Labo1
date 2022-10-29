const chargerPermisJSON = () => {
    $.ajax({
        url:"/permis",
        type:"GET",
        data:{},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
            listePermis = reponse;
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerParType = () => {
    let type = document.getElementById('type').value;

    $.ajax({
        url:"/typePermis",
        type:"POST",
        data:{'typeRecherche': type},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePermisType) => {
            afficher(listePermisType);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerParTerr = () => {
    let terr = document.getElementById('terr').value;

    $.ajax({
        url:"/terrPermis",
        type:"POST",
        data:{'terrRecherche': terr},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePermisTerr) => {
                afficher(listePermisTerr);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let listerParEcheance = () => {
    let annee = document.getElementById('anneeRecherche').value;
    let mois = document.getElementById('moisRecherche').value;

    $.ajax({
        url:"/echeancePermis",
        type:"POST",
        data:{
            'anneeRecherche': annee,
            'moisRecherche': mois
        },
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePermisEcheance) => {
            afficher(listePermisEcheance);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

let permisClassee = () => {
    $.ajax({
        url:"/permisClassee",
        type:"POST",
        data:{},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listePermisClassee) => {
            afficher(listePermisClassee);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}