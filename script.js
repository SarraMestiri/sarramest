document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const adresse = document.getElementById('adresse').value;
    const codePostal = document.getElementById('codePostal').value;
    const motDePasse = document.getElementById('motDePasse').value;

    console.log("Nom:", nom);
    console.log("Prénom:", prenom);
    console.log("Adresse:", adresse);
    console.log("Code Postal:", codePostal);
    console.log("Mot de passe:", motDePasse);

    alert("Formulaire soumis !");
});

document.getElementById('resetBtn').addEventListener('click', function() {
    alert("Formulaire réinitialisé !");
});
