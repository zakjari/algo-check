// longueur de la phrase

// demander de rentre qui se termine avec un point 
const phrase = prompt("Soyez le bienvenue. Entrez une phrase qui se termine par un point :"); 

// vrifie si le dernier caractère de la phrase est un point.

if (phrase.charAt(phrase.length - 1) !== '.') {

        // affiche un message si la phrase ne se termine pas par un point.
    console.log("La phrase ne se termine pas par un point.");
} else {
        // calcule  la longueur de la phrase.
    let longueur = phrase.length;
    // affiche la longueur de la phrase dans la console
    console.log("Longueur de la phrase  : " + longueur + " caractères.");
}

// le nombre de mots dans la phrase (en supposant que les mots sont séparés par un seul espace)

// divise la phrase en mots et utiliser le les espaces 
const mots = phrase.split(' ');
// calcule et affiche le nombre de mots dans la phrase.
const nombreMots = mots.length;
//affiche le nombre de mots
console.log("Nombre de mots : " + nombreMots);

// Le nombre de voyelles dans la phrase.

//initialize le compteur a zero
let nombreVoyelles = 0;
// pour verifier les voyelle dans la phrase 
const voyelles = 'aeiouAEIOU';
//pour verifier 2 condition si la phrase n'est pas vide ou null
if (phrase !== null && phrase !== "") {
    // parcourire chaque element dans la phrase 
    for (let i = 0; i < phrase.length; i++) {
        //si la condition vrai incrémente le compteur 
        if (voyelles.includes(phrase[i])) {
            nombreVoyelles++;
        }
    }
    // affiche le nombbre de voyelle dans la phrase
    console.log("Nombre de voyelles: " + nombreVoyelles);
} else {
    // afficher un message si aucune phrase na rentre
    console.log("Aucune phrase entrée.");
}
