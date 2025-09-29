let API_KEY = prompt('Entre ta cle de API');



const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
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
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

}

function rechercheParNom(name) {
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=' + name + '&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    fetchData(url, options);
}


function rechercheParID(id) {
    const url = 'https://anime-db.p.rapidapi.com/anime/by-id/' + id;
    fetchData(url, options);
}


function rechercheParGenre(genre) {
    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&genres=' + genre + '&sortBy=ranking&sortOrder=asc';
    fetchData(url, options);
}