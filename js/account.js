
// Récupération des éléments du DOM
const nomInput       = document.getElementById("NomInput");
const prenomInput    = document.getElementById("PrenomInput");
const emailInput     = document.getElementById("EmailInput");
const telInput       = document.getElementById("TelephoneInput");
const resultatDiv    = document.getElementById("resultat");
const btnModify      = document.querySelector(".btn-primary");
const btnDelete      = document.querySelector(".btn-danger");

// Dès que le DOM est prêt, charge le profil
document.addEventListener("DOMContentLoaded", loadProfile);
btnModify.addEventListener("click", updateProfile);
btnDelete.addEventListener("click", deleteAccount);

// Affiche un message « safe » dans #resultat
function showSafeMessage(msg, isError = false) {
  const safeMsg = sanitizeHtml(msg);
  resultatDiv.innerHTML = `<div class="${isError ? 'text-danger' : 'text-success'}">${safeMsg}</div>`;
}

// 1. Chargement du profil
function loadProfile() {
  fetch(apiUrl + "profile", {
    method: "GET",
    headers: { "Authorization": "Bearer " + getToken() }
  })
  .then(res => res.ok ? res.json() : Promise.reject("Impossible de charger le profil"))
  .then(profile => {
    // Les assignations à .value sont sûres, mais on peut sanitize au cas où
    nomInput.value    = sanitizeHtml(profile.lastName   || "");
    prenomInput.value = sanitizeHtml(profile.firstName  || "");
    emailInput.value  = sanitizeHtml(profile.email      || "");
    telInput.value    = sanitizeHtml(profile.phone      || "");
  })
  .catch(err => showSafeMessage(err, true));
}

// 2. Mise à jour du profil
function updateProfile() {
  const body = {
    lastName:  nomInput.value,
    firstName: prenomInput.value,
    email:     emailInput.value,
    phone:     telInput.value
  };

  fetch(apiUrl + "profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error("Échec de la mise à jour");
  })
  .then(() => showSafeMessage("Profil mis à jour avec succès"))
  .catch(err => showSafeMessage(err.message, true));
}

// 3. Suppression du compte
function deleteAccount() {
  if (!confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) return;

  fetch(apiUrl + "profile", {
    method: "DELETE",
    headers: { "Authorization": "Bearer " + getToken() }
  })
  .then(res => {
    if (res.ok) {
      // redirection après suppression
      window.location.replace("/goodbye");
    } else {
      throw new Error("Impossible de supprimer le compte");
    }
  })
  .catch(err => showSafeMessage(err.message, true));
}

// Helpers (à adapter selon ton auth)
function getToken() {
  // Exemple : récupère le token dans un cookie ou localStorage
  return localStorage.getItem("apiToken");
}
