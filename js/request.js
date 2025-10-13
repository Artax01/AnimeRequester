async function fetchData(url, options) {
    try {
        if (!isApiKeyValid(sessionStorage.getItem('API_KEY'))) {
            alert("Veuillez définir une clé API valide avant de continuer.");
            return null;
        }

        let response = await fetch(url, options);
        if (!checkResponseStatus(response)) return null;

        return await response.json();
    } 
    catch (error) {
        console.log(error);
    }
}

async function rechercheParNom(name) { 
    let sort = document.querySelector('input[name="sort"]:checked').value;
    let sortBy = document.querySelector('input[name="sortBy"]:checked').value;
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + name + '&sortBy=' + sort + '&sortOrder=' + sortBy;
    return await fetchData(url, options);
}

async function rechercheParID(id) {
    const url = 'https://anime-db.p.rapidapi.com/anime/by-id/' + id + '?page=1&size=1';
    return await fetchData(url, options);
}

async function rechercheParGenre(genre) {
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=50&genres=' + genre + '&sortBy=ranking&sortOrder=asc';
    return await fetchData(url, options);
}

async function getListeGenres() {
    const url = 'https://anime-db.p.rapidapi.com/genre';
    return await fetchData(url, options);
}


document.getElementById('setApiKeyBtn').addEventListener('click', () => {
    setApiKey(force=true);
});