var btnSearch = document.getElementById('searchBtn');
var inputParametre = document.getElementById('parameter');

//detecter le btn de recherche

btnSearch.addEventListener('click', async function() {
    param = inputParametre.value;
    var reponse = await rechercheParNom(param);

    let liste = [...reponse.data];

    liste.forEach(anime => {
        createCard(anime);
    });
});