let API_KEY = prompt('Entre ta cle de API');



const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'anime-db.p.rapidapi.com'
	}
};


async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }

}

async function rechercheParNom(name) { 
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + name + '&sortBy=ranking&sortOrder=asc';
    // fetchData(url, options);
    return await fetchData(url, options);
}


function rechercheParID(id) {
    const url = 'https://anime-db.p.rapidapi.com/anime/by-id/' + id;
    return fetchData(url, options);
}


function rechercheParGenre(genre) {
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=' + genre + '&sortBy=ranking&sortOrder=asc';
    return fetchData(url, options);
}