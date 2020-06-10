/**
 * step2.js
 *
 * Script principal de génération de citation (Partie 2)
 *
 * @author Claudine
 * @version 1.0
 * date 22/04/2020
 */


/** @var victorHugo. constante contenant une nouvelle instance de la classe Quotes */
const victorHugo = new Quotes(


    [
        "On passe une moitié de sa vie",
        "Enfer chrétien, du feu. Enfer païen, du feu.",
        "On ne souffre jamais que du mal"
    ],


    [
        "à attendre ceux qu'on aimera",
        "enfer mahométan, du feu. Enfer hindou, des flammes ",
        "que nous font ceux qu'on aime"
    ],


    [
        "et l'autre moitié à quitter ceux qu'on aime.",
        "a en croire les religions, Dieu est né rôtisseur.",
        "le mal qui vient d'un ennemi ne compte pas."
    ]

);

/** @var oscarWilde. constante contenant une nouvelle instance de la classe Quotes */
const oscarWilde = new Quotes(


    [
        "S'aimer soi-même",
        "Il ne faut pas se fier aux apparences,",
        "Quand nous sommes heureux, nous sommes toujours bons, "
    ],


    [
        "est le début d'une histoire d'amour",
        "Beaucoup de gens n'ont pas l'air aussi bêtes",
        "mais quand nous sommes bons,"
    ],


    [
        "qui durera toute une vie.",
        "qu'ils ne le sont réellement.",
        "nous ne sommes pas toujours heureux."
    ]

);


document.addEventListener("DOMContentLoaded", function(event) {

    let victorHugoButton = document.getElementById('auteur-vh');
    let oscarWildeButton = document.getElementById('auteur-ow');
    let generatorButton = document.getElementById('generer');
    let showCitations = document.getElementById('show-citations');
    let resetButton = document.getElementById('reset')


    let numberCitationsInput = document.getElementById('number-citations');


    let classSelected = null;



    victorHugoButton.addEventListener('click', function() {

        victorHugoButton.style.background="#393e42";
        oscarWildeButton.style.background="#6c757d";
        classSelected = victorHugo;
        generatorButton.disabled = false;
    });

    oscarWildeButton.addEventListener('click', function() {
        oscarWildeButton.style.background="#393e42";
        victorHugoButton.style.background="#6c757d";
        classSelected = oscarWilde;
        generatorButton.disabled = false;

    });

    generatorButton.addEventListener('click', function () {
        showCitations.innerHTML = "";
        for(let i = 0; i < numberCitationsInput.value; i++){

            let newP = document.createElement("p");

            newP.innerHTML = classSelected.generator();
            showCitations.appendChild(newP);
        }

    });

    resetButton.addEventListener('click', function () {
        window.location.reload(true);

    });
});

