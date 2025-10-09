// let API_KEY = prompt('Entre ta cle de API');
let API_KEY = '8ecca23a5emsh63cc0179c3733aap180f72jsn0e721c1e4da9';



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
    var sort = document.querySelector('input[name="sort"]:checked').value;
    var sortBy = document.querySelector('input[name="sortBy"]:checked').value;
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + name + '&sortBy=' +sort+'&sortOrder='+sortBy;
    // fetchData(url, options);
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