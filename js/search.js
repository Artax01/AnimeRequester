const btnSearch = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const inputParametre = document.getElementById('parameter');

const select = document.getElementById('filter');
const paramField = document.getElementById('paramField');
const checkboxGroup = document.getElementById('checkboxGroup');

btnSearch.addEventListener('click', async () => {

    param = inputParametre.value;

    let reponse;
    clearCards();

    if(select.value == 'byTitle') {
        reponse = await rechercheParNom(param);
    } 

    else if(select.value == 'byGenre') {
        const checkedGenres = Array.from(document.querySelectorAll('#checkboxGroup input[type="checkbox"]:checked')).map(checkbox => checkbox.name);
        reponse = await rechercheParGenre(checkedGenres.join(','));
    } 

    else if(select.value == 'byId') {
        reponse = await rechercheParID(param);
        createCard(reponse);
    }

    if (reponse == null) return;

    let liste = [...reponse.data];

    liste.forEach(anime => {
        createCard(anime);
    });
});

clearBtn.addEventListener('click', () => {
    clearCards();
    inputParametre.value = '';
});


select.addEventListener('change', () => {
    let selectedOption = select.value;
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
            paramField.style.display = 'none';
            checkboxGroup.style.display = 'block';
            createGenre();
            break;
        default:
            paramField.style.display = 'flex';
            checkboxGroup.style.display = 'none';
    }
});


document.getElementById('toggledarkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
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