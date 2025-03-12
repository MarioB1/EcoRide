import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html",[]),
    new Route("/vuecovoit", "Vue", "/pages/vuecovoit.html",[]),
    new Route("/contact", "Contact", "/pages/contact.html",[]),
    new Route("/avis", "Avis", "/pages/avis.html",[]),
    new Route("/trajets", "Trajets", "/pages/trajets.html",[]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html",[]),
    new Route("/admin", "Espace administarateur", "/pages/admin.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", [],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", [], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", []),


];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";