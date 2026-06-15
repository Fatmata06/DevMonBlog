import { accueil } from "./pages/accueil/accueil.js";
import { ajouterArticle } from "./pages/ajoutArticle/ajoutArticle.js";
import { connexion } from "./pages/connexion/connexion.js";
import { admin } from "./pages/inscription/admin.js";
import { inscription } from "./pages/inscription/inscription.js";
import { notfound } from "./pages/pageNotFound/pageNotFound.js";

const routes = {
    '#/':accueil,
    '#/connexion':connexion,
    '#/inscription':inscription,
    '#/admin':admin,
    '#/ajoutarticle':ajouterArticle 
};

function afficherPage(){
    const monapp = document.querySelector('#app');

    const hash = window.location.hash || '#/';

    const mapage = routes[hash] || notfound;
    
    monapp.innerHTML = mapage();

    window.addEventListener('hashchange',afficherPage);

}

export {afficherPage};