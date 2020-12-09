// EXO 1
let heure= new Date();
console.log("Heure afficher moins une seconde : "+heure.getHours()+ heure.getMinutes()+ heure.getSeconds(-1));

// EXO 2
// quand un candidat est élu à plus de 50 %, il devient élu dès le 1er tour.
// si 2eme tour, que les candidats avec au moins 12.5% de voix.
// Ecrire algo qui permet la saisie de scores pour 4 candidats au 1er tour uniquement.
// il dira si élu ou non.
// si 1er au premier tour go au 2nd tour en ballotage
// si pas 1er au premier tour go au 2nd en défavorable

// EXO 3
// algo qui demande un num de jour, de mois, et d'année
// puis renvoie si il s'agit ou non d'une date valide.
// (mois de février: 28 jours sauf en bisextile(29))
// si bisextile, divisible par 4
// années divisible par 100 sont pas bisextiles
// années pas divisible par 400 sont bisextiles.

// let dateJour= Number(prompt("Renseigner un jour (en nombre au format 'xx')"));
// let dateMois= Number(prompt("Renseigner un mois (en nombre au format 'xx')"));
// let dateAnnee= Number(prompt("Renseigner une année (en nombre au format 'xxxx')"));
// let bisextile = Math.max(28);
// let anneeNormal = Math.max(29);
let date = Number(prompt("Renseigner un jour, un mois et une année (en nombre au format 'xx/xx/xxxx').").value);
let joursMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let fevrier = joursMois[2];
if ((fevrier % 400 === 0) || (fevrier % 100 !== 0 && fevrier % 4 === 0)) {
    joursMois[2] = 29;
  }

else
{
    console.log("Année bisextile.")
}

// if (dateJour == Math.max(31) && (dateMois == Math.max(12)){
// }
// if(dateAnnee == dateAnnee/400){
//     dateMois = bisextile;
// }
// else if(dateAnnee / 100){
//     dateMois = anneeNormal;
// }
// if((dateAnnee % 400) === 0){
//     dateMois = bisextile;
// }
// else
// {
//     console.log("Cette année n'est pas bisextile");
//     break;
// }
// else if((dateAnnee % 100) === 0.1){
//     dateMois = anneeNormal;
// }
// else(dateJour && dateMois && dateAnnee !== Number)
// {
//     console.log("Ecrivez en chiffres après avoir actualisez la page.");
//     break;
// }
// getRandomInt(min, max)
// Date.parse()
//Number.isInteger



// EXO 4
let nombreAdeviner = Number(prompt("Choisissez le nombre à faire deviner").value);
let rechercheNombre = Number(prompt("Rentrer un nombre pour tenter de deviner le nombre de base.").value);
if (rechercheNombre < nombreAdeviner)
{
    console.log("Plus grand");
}

else if (rechercheNombre > nombreAdeviner)
{
    console.log("Plus petit");
}

else(rechercheNombre !== Number)
{
    console.log("Renseigner un nombre correct.")
}

// EXO 5
let nom = prompt("Renseigner votre nom");
let prenom = prompt("Renseigner votre prénom");
let age = anniversaire - passer;
passer.getFullYear();
let jourPasser = passer.getDay();
let moisPasser = passer.getUTCMonth();
let anneePasser = passer.getFullYear();
anniversaire.getFullYear();
let jourAnniversaire = anniversaire.getDay();
let moisAnniversaire = anniversaire.getUTCMonth();
let anneeAnniversaire = anniversaire.getFullYear();

alert("Joyeux anniversaire " + prenom + " " + nom + " ! Vous avez" + age + " ! Et nous sommes le : " + jourAnniversaire + " " + moisAnniversaire + " " + anneeAnniversaire + " !");

console.log("Joyeux anniversaire " + prenom + " " + nom + " ! Vous avez" + age + " ! Et nous sommes le : " + jourAnniversaire + " " + moisAnniversaire + " " + anneeAnniversaire + " !");

// EXO 6
let tableau1=[];
let tableau2=[];
// let multiplication = Number(tableau1 *= tableau2);
// let addition = Number(tableau1 += tableau2);
// let chtroumf =  multiplication + addition;
// let addition= itableau1 + itableau2;
//multiplier l'index de chaque tableau entre eux
//puis additionner chaque resultat
let schtroumpf = multipli1 + multipli2;

for (i=0; i<tableau1.length; i++){
    // i=itableau1;
    i=multipli1
}
for (i=0; i<tableau2.lenght; i++){
    // i=itableau2;
    i=multipli2
}
console.log("Voici le schtroumpf : ", schtroumpf, " !");
