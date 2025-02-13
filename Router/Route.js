export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
    console.log({url, title, pathHtml, authorize, pathJS})
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["client"] -> Réserver aux utilisateurs avec le rôle client 
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["employee"] -> Réserver aux utilisateurs avec le rôle employé 
["admin", "client","employee"] -> Réserver aux utilisateurs avec le rôle client OU admin OU employé
*/