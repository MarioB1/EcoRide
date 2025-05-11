
// Récupération des éléments
const textareaAvis = document.getElementById("avis-client");
const btnEnvoyer = document.querySelector(".btn-primary");

// Écouteur d'événement
btnEnvoyer.addEventListener("click", envoyerSignalement);

// Affiche un message safe (réutilise sanitizeHtml du script.js)
function showSafeMessage(msg, isError = false) {
  const safeMsg = sanitizeHtml(msg);
  alert(safeMsg); // ou affiche-le dans un <div> si tu veux l'afficher dans la page
}

// Fonction d'envoi du signalement
function envoyerSignalement() {
  const avis = textareaAvis.value.trim();

  if (!avis) {
    showSafeMessage("Le champ ne peut pas être vide", true);
    return;
  }

  const body = {
    message: avis
  };

  fetch(apiUrl + "report", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  })
  .then(res => {
    if (res.ok) {
      showSafeMessage("Signalement envoyé avec succès !");
      textareaAvis.value = ""; // reset champ
    } else {
      throw new Error("Erreur lors de l'envoi du signalement");
    }
  })
  .catch(err => showSafeMessage(err.message, true));
}

// Helper pour récupérer le token
function getToken() {
  return localStorage.getItem("apiToken");
}
