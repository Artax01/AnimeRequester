async function fetchData(url, options) {
    try {
        if (sessionStorage.getItem('API_KEY') == "") return null;

        let response  = await fetch(url, options);
        let result = await response.json();
        
        if (response.status === 403) {
            alert("Aucun résultat trouvé (Vérifier votre clé api) !");
            return null;
        }

        return result;
    
    } catch (error) {
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


document.getElementById('setApiKeyBtn').addEventListener('click', () => {
    setApiKey(force=true);
});