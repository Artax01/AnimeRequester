var btnSearch = document.getElementById('searchBtn');
var clearBtn = document.getElementById('clearBtn');
var inputParametre = document.getElementById('parameter');

var select = document.getElementById('filter');
var paramField = document.getElementById('paramField');
var checkboxGroup = document.getElementById('checkboxGroup');

//detecter le btn de recherche

btnSearch.addEventListener('click', async function() {

    param = inputParametre.value;

    var reponse;
    clearCards();

    if(select.value == 'byTitle'){
        reponse = await rechercheParNom(param);
    }else if(select.value == 'byGenre'){
        reponse = await rechercheParGenre(param);
    }else if(select.value == 'byId'){
        reponse = await rechercheParID(param);
        createCard(reponse );  
    }

    if (!reponse || !Array.isArray(reponse.data)) {
        // console.error("La réponse ne contient pas de propriété 'data' valide :", reponse);
        alert("Aucun résultat trouvé ou erreur lors de la recherche.");
        return;
    }


    let liste = [...reponse.data];

    liste.forEach(anime => {
        createCard(anime);
    });
});

clearBtn.addEventListener('click', function() {
    clearCards();
    inputParametre.value = '';
});


select.addEventListener('change', function() {
    var selectedOption = select.value;
    switch (selectedOption) {
        case 'byId':
            inputParametre.placeholder = 'Ex: 21';
            paramField.style.display = 'flex';
            checkboxGroup.style.display = 'none';
            break;
        case 'byTitle':
            inputParametre.placeholder = 'Ex: Naruto';
            paramField.style.display = 'flex';
            checkboxGroup.style.display = 'none';
            break;
        case 'byGenre':
            console.log("genre");
            paramField.style.display = 'none';
            checkboxGroup.style.display = 'block';
            break;
        default:
            paramField.style.display = 'flex';
            checkboxGroup.style.display = 'none';
    }
});



document.getElementById('toggleMoreFilter').addEventListener('click', function() {
    const moreFilter = document.getElementById('moreFilter');
    if (moreFilter.style.display === 'none' || moreFilter.style.display === '') {
        moreFilter.style.display = 'flex';
        this.textContent = 'Masquer les filtres avancés';
    } else {
        moreFilter.style.display = 'none';
        this.textContent = 'Afficher les filtres avancés';
    }
});