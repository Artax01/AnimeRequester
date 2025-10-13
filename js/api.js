const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': "",
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
};

function verifyApiKey() {
    try {
        if (sessionStorage.getItem('API_KEY') == null) {
            return false;
        } else {
            return true;
        }
    }
    catch (error) {
        console.log(error);
    }
}

function setApiKey(force=false) {
    if (verifyApiKey() && !force) {
        options.headers['x-rapidapi-key'] = sessionStorage.getItem('API_KEY');
    } else {
        const key = prompt(`Clé actuel: ${sessionStorage.getItem('API_KEY') || 'Invalide'}\nEntrez votre clé de API :`);

        if (key && key != "" && key.length === 50) {
            alert("Clé API définie. Merci !");

            sessionStorage.setItem('API_KEY', key);
            options.headers['x-rapidapi-key'] = key;
        } else {
            alert("Clé API invalide. Veuillez réessayer.");
            sessionStorage.setItem('API_KEY', "");
            options.headers['x-rapidapi-key'] = "";
        }
    }
};


// *********** Verification de base ***********
setApiKey();
// ********************************************
