const btnSearch = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const inputParametre = document.getElementById('parameter');

const select = document.getElementById('filter');
const paramField = document.getElementById('paramField');
const checkboxGroup = document.getElementById('checkboxGroup');

btnSearch.addEventListener('click', async () => {
    if (!isApiKeyValid(sessionStorage.getItem('API_KEY'))) return alert("Veuillez définir une clé API valide avant de continuer.");

    let param = inputParametre.value;
    let reponse;
    clearCards();

    switch (select.value) {
        case 'byTitle':
            reponse = await rechercheParNom(param);
            break;
        case 'byGenre':
            const checkedGenres = Array.from(document.querySelectorAll('#checkboxGroup input[type="checkbox"]:checked')).map(checkbox => checkbox.name);
            reponse = await rechercheParGenre(checkedGenres.join(','));
            break;
        case 'byId':
            if (isFinite(param) && !isNaN(param)) {
                reponse = await rechercheParID(param);
                if (reponse) createCard(reponse);
            } 
            else return alert('Veuillez entrer un ID valide (numérique).');
            break;
        default:
            break;
    }

    if (!reponse) return;
    let liste = reponse.data ? [...reponse.data] : [reponse[0]];

    liste.forEach(anime => {
        createCard(anime);
    });
});

clearBtn.addEventListener('click', () => {
    clearCards();
    inputParametre.value = '';
});

select.addEventListener('change', () => {
    sessionStorage.setItem('SEARCH_FILTER', select.value);

    paramField.style.display = 'flex';
    checkboxGroup.style.display = 'none';

    const placeholders = {
        'byTitle': 'Ex: Naruto',
        'byId': 'Ex: 21',
        'byRang': 'Ex: 1'
    };
    inputParametre.placeholder = placeholders[select.value] || '';

    if (select.value === 'byGenre') {
        paramField.style.display = 'none';
        checkboxGroup.style.display = 'block';
        createGenre();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    select.value = 'byTitle';
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