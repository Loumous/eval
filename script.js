// EXO 1
// affiche heure 1sec plus tard que l'heure choisie
//(millisecondes divisé par 1000 pour donné des secondes divisé par 60 pour donné les minutes divisé par 60 pour donner des heures divisé par 24 pour donné les jours. des millisecondes/secondes, minutes, heure, jours)
          
// EXO 2
// quand un candidat est élu à plus de 50 %, il devient élu dès le 1er tour.
// si 2eme tour, que les candidats avec au moins 12.5% de voix.
// Ecrire algo qui permet la saisie de scores pour 4 candidats au 1er tour uniquement.
// il dira si élu ou non.
// si 1er au premier tour go au 2nd tour en ballotage
//si pas 1er au premier tour go au 2nd en défavorable


// EXO 3
// algo qui demande un num de jour, de mois, et d'année
// puis renvoie si il s'agit ou non d'une date valide.
// (le mois de février compte 28 jours sauf en bisextile(29))
// si bisextile, divisible par 4
// années divisible par 100 sont pas bisextiles
// années divisible pas 400 sont bisextiles.
let dateJour= Number(prompt("Renseigner un jour (en chiffres)"));
let dateMois= Number(prompt("Renseigner un mois (en chiffres)"));
let dateAnnee= Number(prompt("Renseigner une année (en chiffres)"));
if(dateJour && dateMois && dateAnnee !== Number)
{
    console.log("Ecrivez en chiffres s'il vous plaît.");
}

Date.parse()

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
let moisPasser = passer.getMonth();
let anneePasser = passer.getYear();
anniversaire.getFullYear();
let jourAnniversaire = anniversaire.getDay();
let moisAnniversaire = anniversaire.getMonth();
let anneeAnniversaire = anniversaire.getYear();

alert("Joyeux anniversaire " + prenom + " " + nom + " ! Vous avez" + age + " ! Et nous sommes le : " + jourAnniversaire + " " + moisAnniversaire + " " + anneeAnniversaire + " !");

console.log("Joyeux anniversaire " + prenom + " " + nom + " ! Vous avez" + age + " ! Et nous sommes le : " + jourAnniversaire + " " + moisAnniversaire + " " + anneeAnniversaire + " !");

// EXO 6
let tableau1=[];
let tableau2=[];
let schtroumpf = multipli1 + multipli2;

for (i=0; i<tableau1.length; i++){
    i=multipli1
}
for (i=0; i<tableau2.lenght; i++){
    i=multipli2
}
console.log("Voici le schtroumpf : ", schtroumpf, " !");
