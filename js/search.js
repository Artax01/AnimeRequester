var btnSearch = document.getElementById('searchBtn');
var inputParametre = document.getElementById('parameter');

//detecter le btn de recherche

btnSearch.addEventListener('click', async function() {
    param = inputParametre.value;
    // console.log("Recherche de : " + param);
    var reponse = await rechercheParNom(param);

    

    console.log(reponse.data[0].title);

    reponse.data.forEach(ligne => {
        createCard(ligne);
    });


    

});