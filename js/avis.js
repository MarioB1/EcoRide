
// Sélection des éléments du DOM
const avisTextarea = document.getElementById("avis-client");
const envoyerBtn = document.querySelector(".btn-primary");

// Événement sur clic
envoyerBtn.addEventListener("click", envoyerAvis);

// Affiche un message dans une alerte (ou modifier ici pour afficher dans un <div>)
function showSafeMessage(msg, isError = false) {
  const safeMsg = sanitizeHtml(msg);
  alert(safeMsg); // Optionnellement remplacer par un affichage inline
}

// Fonction pour envoyer l'avis
function envoyerAvis() {
  const avis = avisTextarea.value.trim();

  if (!avis) {
    showSafeMessage("Veuillez écrire un avis avant d'envoyer.", true);
    return;
  }

  const body = {
    commentaire: avis
    // Tu peux aussi ajouter une note ici si elle est cliquable plus tard
    // note: 5
  };

  fetch(apiUrl + "avis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  })
  .then(res => {
    if (res.ok) {
      showSafeMessage("Merci pour votre avis !");
      avisTextarea.value = ""; // Réinitialise le champ
    } else {
      throw new Error("Erreur lors de l'envoi de l'avis");
    }
  })
  .catch(err => showSafeMessage(err.message, true));
}

// Helper pour récupérer le token d'auth
function getToken() {
  return localStorage.getItem("apiToken");
}
