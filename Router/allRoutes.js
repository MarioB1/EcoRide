import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/home", "Accueil", "/pages/home.html",[]),
    new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html",[]),
    new Route("/contact", "Contact", "/pages/contact.html",[]),
    new Route("/avis", "Avis", "/pages/avis.html",["employe"]),
    new Route("/trajets", "Trajets", "/pages/trajets.html",["employe"]),
    new Route("/admin", "Espace administarateur", "/pages/admin.html",["admin"]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"],"/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["connected"]),


];


//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";