const chargerPermisJSON = () => {
    $.ajax({
        url:"/permis",
        type:"GET",
        data:{},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (reponse) => {
            //alert(reponse);
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
             listerPermisType(listePermisType);
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
            console.log(listePermisTerr);
                listerPermisTerr(listePermisTerr);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}
