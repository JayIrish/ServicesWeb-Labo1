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

let listerParAuteur = () => {
    let type = document.getElementById('type').value;

    $.ajax({
        url:"/typePermis",
        type:"POST",
        data:{'typeRecherche': type},
        dataType:'json',  // json, xml, text
        async: true, // false pour se  mettre en mode synchrone.
        success: (listeLivresDeAuteur) => {
            //alert(reponse);
             listerLivresAuteur(listeLivresDeAuteur);
        },
        fail: (e) => {
            alert(`Gros probléme : ${e.message}`);
        }
    });
}

