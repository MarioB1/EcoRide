
// Sélection des éléments du DOM
const passwordInput = document.getElementById("PasswordInput");
const confirmInput = document.getElementById("ValidatePasswordInput");
const submitBtn = document.querySelector("form button.btn-primary");

// Écouteur d’événement
submitBtn.addEventListener("click", changerMotDePasse);

// Affiche un message utilisateur
function showSafeMessage(msg, isError = false) {
  const safeMsg = sanitizeHtml(msg);
  alert(safeMsg); // Ou afficher dans un div si tu préfères
}

// Gestion du changement de mot de passe
function changerMotDePasse(event) {
  event.preventDefault(); // Empêche la soumission du formulaire HTML classique

  const newPassword = passwordInput.value.trim();
  const confirmPassword = confirmInput.value.trim();

  if (!newPassword || !confirmPassword) {
    showSafeMessage("Tous les champs sont requis.", true);
    return;
  }

  if (newPassword !== confirmPassword) {
    showSafeMessage("Les mots de passe ne correspondent pas.", true);
    return;
  }

  if (newPassword.length < 6) {
    showSafeMessage("Le mot de passe doit contenir au moins 6 caractères.", true);
    return;
  }

  const body = { password: newPassword };

  fetch(apiUrl + "editPassword", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      if (res.ok) {
        showSafeMessage("Mot de passe modifié avec succès !");
        passwordInput.value = "";
        confirmInput.value = "";
      } else {
        throw new Error("Erreur lors de la modification du mot de passe.");
      }
    })
    .catch(err => showSafeMessage(err.message, true));
}

// Helper
function getToken() {
  return localStorage.getItem("apiToken");
}
