
// Sélection des éléments
const plaqueInput     = document.getElementById("PlaqueInput");
const dateInput       = document.getElementById("DateImmatInput");
const marqueInput     = document.getElementById("MarqueInput");
const modeleInput     = document.getElementById("ModeleInput");
const couleurInput    = document.getElementById("CouleurInput");
const placesInput     = document.getElementById("PlacesInput");
const preferencesInput= document.getElementById("PreferencesInput");
const form            = document.querySelector("form");

// Gère la soumission du formulaire
form.addEventListener("submit", ajouterVehicule);

// Affiche un message utilisateur sécurisé
function showSafeMessage(msg, isError = false) {
  const safeMsg = sanitizeHtml(msg);
  alert(safeMsg); // ou afficher dans un div stylé
}

// Envoi des données au backend
function ajouterVehicule(event) {
  event.preventDefault();

  const body = {
    plaque:       plaqueInput.value.trim(),
    dateImmat:    dateInput.value.trim(),
    marque:       marqueInput.value.trim(),
    modele:       modeleInput.value.trim(),
    couleur:      couleurInput.value.trim(),
    places:       parseInt(placesInput.value),
    preferences:  preferencesInput.value.trim()
  };

  // Validation simple côté client
  if (!body.plaque || !body.dateImmat || !body.marque || !body.modele || !body.couleur || isNaN(body.places)) {
    showSafeMessage("Tous les champs requis doivent être remplis correctement.", true);
    return;
  }

  fetch(apiUrl + "vehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error("Erreur lors de l'enregistrement du véhicule.");
    })
    .then(() => {
      showSafeMessage("Véhicule enregistré avec succès !");
      form.reset(); // Réinitialise le formulaire
    })
    .catch(err => showSafeMessage(err.message, true));
}

// Récupération du token (exemple avec localStorage)
function getToken() {
  return localStorage.getItem("apiToken");
}
