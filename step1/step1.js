/**
 * step1.js
 *
 * Script principal de génération de citation (Partie 1)
 *
 * @author Claudine
 * @version 1.0
 * date 22/04/2020
 */

/** @var {array} beginning Tableau contenant les premières parties de la citation */
const beginning = [
    "Quelle que soit cette rigueur de l'époque actuelle",
    "Si vous voulez mon avis concernant la baisse de confiance induite,",
    "Avec la dégradation intrinsèque,"
];

/** @var {array} middle Tableau contenant les deuxièmes parties de la citation */
const middle = [
    "je n'exclus pas d'examiner certaines problématiques éventuelles,",
    "il convient d'uniformiser la globalité des décisions possibles,",
    "il faut de toute urgence inventorier la simultanéité des problématiques opportunes,"

];


/** @var {array} end Tableau contenant les dernières parties de la citation */
const end = [
    "pour le futur.",
    "toutes choses étant égales par ailleurs.",
    "depuis longtemps."
];

/**
 *generator
 *
 * Methode de la classe Quotes : création de citations aléatoires
 *
 * @return 	{string} Citation générée aléatoirement (concaténation)
 */
const generator = () => {
    let quoteBeginning = beginning[Math.floor(Math.random()*beginning.length)];
    let quoteMiddle = middle[Math.floor(Math.random()*middle.length)];
    let quoteEnd = end[Math.floor(Math.random()*middle.length)];

    //Méthode pour supprimer les points d'exclamation au début et milieu de phrase.
    quoteBeginning = quoteBeginning.replace(".!"," ");
    quoteMiddle = quoteMiddle.replace(".!", );

    //Assemblage du résultat final.
    return quoteBeginning + " " + quoteMiddle + " " + quoteEnd;
};


document.addEventListener("DOMContentLoaded", function(event) {

    let textCitation = document.getElementById('citation');
    let button = document.getElementById('generer');

    textCitation.textContent = generator();

    button.addEventListener('click', function() {

        textCitation.textContent = generator();

    });
});

