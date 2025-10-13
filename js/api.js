const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': "",
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
};

function isApiKeyValid(key) {
    return (key && key.trim() != "" && key.length === 50);
}

function isApiKeyAlreadySet() {
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
    if (isApiKeyAlreadySet() && !force) {
        options.headers['x-rapidapi-key'] = sessionStorage.getItem('API_KEY');
    } else {
        const key = prompt(`Clé actuel: ${sessionStorage.getItem('API_KEY') || 'Invalide'}\nEntrez votre clé de API :`);

        if ((key === null || key === "") && sessionStorage.getItem('API_KEY') != null) {
            alert("Clé API inchangée.");
            return;
        }

        if (isApiKeyValid(key)) {
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

function checkResponseStatus(response) {
    switch (response.status) {
        case 403:
            alert("Code erreur 403:\nAucun résultat trouvé (Vérifier votre clé api) !");
            return false;
        case 429:
            alert("Code erreur 429:\nLimite de requêtes atteinte. Veuillez réessayer plus tard.");
            return false;
        default:
            return true;
    }
}

// *********** Verification de base ***********
setApiKey();
console.log(`Site developpé par aR7dx et come-gp.\naR7dx: https://github.com/aR7dx\ncome-gp: https://github.com/come-gp\nMerci d'utiliser votre propre clé API.\n\nVersion: 2.0.0`);
// ********************************************
