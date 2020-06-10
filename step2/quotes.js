/** Class representant les citations */
class Quotes {
    /**
     *
     * Création des citations
     *
     * @param {array} beginning - Le début des citations
     * @param {array} middle - Le milieu des citations
     * @param {array} end - La fin des citations
     */
    constructor(beginning, middle, end) {
        this.beginning = beginning ;
        this.middle = middle;
        this.end = end;
    }

    /**
     *generator
     *
     * Methode de la classe Quotes : création de citations aléatoires
     *
     * @return 	{string} Citation générée aléatoirement (concaténation)
     */
    generator (){
        let part1 = this.beginning[Math.floor(Math.random() * this.beginning.length)];
        let part2 = this.middle[Math.floor(Math.random() * this.middle.length)];
        let part3 = this.end[Math.floor(Math.random() * this.end.length)];

        //Méthode pour supprimer les points d'exclamation au début et milieu de phrase.
        part1 = part1.replace(".!", " ");
        part2 = part2.replace(".!", " ");

        //Assemblage du résultat final.
        const citations = part1 + " " + part2 + " " + part3;
        return citations;
    }
}