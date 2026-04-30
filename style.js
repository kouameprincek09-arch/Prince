document.getElementById('sendBtn').addEventListener('click', function() {
  let name = document.getElementById('name').value || "Client";
  let message = encodeURIComponent(document.getElementById('message').value || "Je souhaite passer une commande");
  window.open(`https://wa.me/2250586354481?text=Bonjour%20Pressing%20Pro,%20je%20m'appelle%20${name},%20${message}`, '_blank');
});

