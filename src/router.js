import { accueil } from "./pages/accueil/accueil.js";
import { ajouterarticle } from "./pages/ajoutarticle/ajoutarticle.js";
import { connexion } from "./pages/connexion/connexion.js";
import { admin } from "./pages/admin/admin.js";
import { inscription } from "./pages/inscription/inscription.js";
import { notfound } from "./pages/pageNotFound/pageNotFound.js";

const routes = {
    '#/':accueil,
    '#/connexion':connexion,
    '#/inscription':inscription,
    '#/admin':admin,
    '#/ajoutarticle':ajouterarticle 
};

function afficherPage(){
    const monapp = document.querySelector('#app');

    const hash = window.location.hash || '#/';

    const mapage = routes[hash] || notfound;
    
    monapp.innerHTML = mapage();

}

export {afficherPage};