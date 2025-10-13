# AnimeRequester

## Bonus 
Vous trouverez ci-dessous le détail de chacune des versions mais vous pouvez voir ici la liste les fonctionnalités bonus que nous avons implémentées:

• Mise en cache de la liste des genres pour économiser des requêtes API.
• Gestion précise des erreurs avec un comportement et un message différent en fonction du code retour d'érreur.
• Vérification de la conformité de la clé API.

## Version de base (V1) :
L’utilisateur pourra, grâce à un formulaire, saisir un nom d’anime ou son identifiant ou bien encore un
classement. La requête retournera, sous forme de cartes, 10 résultats maximum (un seul pour une
recherche par identifiant ou classement).

### Chaque carte contiendra :
• Le titre de l’anime
• Une image si cette dernière est disponible
• Le synopsis
• Les catégories/genres s’il y en a
• Le classement de l’anime
• Le nombre d’épisodes

### Un premier bouton permettra de lancer la recherche et un second de réinitialiser le formulaire

## Version avancée (V2) :

• La page permettra une recherche par genre (liste sous forme de cases à cocher ou d’étiquettes sélectionnables ou à minima liste des genres pour permettre leur saisie).
• La page devra être consultable depuis GitHub pages (L’utilisateur devra saisir sa clé API depuis l’interface et cette dernière sera stockée en sessionStorage).
• La page proposera un mode clair/sombre dont la valeur sera également stockée en sessionStorage.

> L’ergonomie et l’esthétisme de votre page seront grandement appréciés