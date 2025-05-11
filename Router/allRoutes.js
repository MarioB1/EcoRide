import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[], "/js/accueil.js"),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html",[],),
    new Route("/vuecovoit", "Vue", "/pages/vuecovoit.html",[]),
    new Route("/selection", "Selection", "/pages/selection.html",[]),
    new Route("/montrajet", "Mon Trajet", "/pages/montrajet.html",[],"/js/auth/signin.js"),
    new Route("/signaler", "Signaler", "/pages/signaler.html",[], "/js/signaler.js"),
    new Route("/laisseravis", "Laisser avis", "/pages/laisseravis.html",[]),
    new Route("/contact", "Contact", "/pages/contact.html",[]),
    new Route("/avis", "Avis", "/pages/avis.html",[], "/js/avis.js"),
    new Route("/trajets", "Trajets", "/pages/trajets.html",[]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html",[],"/js/auth/password.js"),
    new Route("/admin", "Espace administarateur", "/pages/admin.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", [],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", [], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", [], "/js/account.js"),
    new Route("/historique", "Mes voyages", "/pages/historique.html", []),
    new Route("/encours", "Trajet en cours", "/pages/encours.html", []),
    new Route("/ajouter", "Ajouter un véhicule", "/pages/ajouter.html", [], "/js/ajouter.js"),



];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";