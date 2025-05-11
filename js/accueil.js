
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const depart = sanitizeHtml(params.get('depart') || '');
  const destination = sanitizeHtml(params.get('destination') || '');

  document.getElementById('resultat').innerHTML = `
    <p>Départ : ${depart}</p>
    <p>Destination : ${destination}</p>
  `;
});
