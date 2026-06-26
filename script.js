const formulaire = document.getElementById("invocation");

formulaire.addEventListener("submit", function(event) {
  event.preventDefault();

  const prenom = document.getElementById("prenom").value;
  const creature = document.getElementById("creature").value;
  const message = `${prenom}, ${creature} a entendu ton appel et te suivra tout ta vie !`;

  document.getElementById("message").textContent = message;
  document.getElementById("invocation").classList.add("cache");
  document.getElementById("resultat").classList.remove("cache");
});