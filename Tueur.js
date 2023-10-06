"use strict"
// -------------------------Fonction Survivant-------------------------

function creation__perso()
{
    creation_class();
    let p1 = nom(9);
    p1 = assignation_classe(p1,5);
    let p2 = nom(8);
    p2 = assignation_classe(p2,4);
    let p3 = nom(7);
    p3 = assignation_classe(p3,3);
    let p4 = nom(6);
    p4 = assignation_classe(p4,2);
    let p5 = nom(5);
    p5 = assignation_classe(p5,1);
    return [p1,p2,p3,p4,p5];
};

function creation_class()
{
    let nerd = stat();
    let sportif = stat();
    let blonde = stat();
    let baka = stat();
    let clown = stat();
    tab_classe = [["nerd",nerd],["sportif",sportif],["blonde",blonde],["baka",baka],["clown",clown]];
};

function stat()
{
    let stat_Mourrir = Math.random() * (0.9-0.1) + 0.1;
    let stat_Degat = Math.random() * (0.9-0.1) + 0.1;
    let stat_DegatMort = Math.random() * (0.9-0.1) + 0.1;

    return [stat_Mourrir.toFixed(1),stat_Degat.toFixed(1),stat_DegatMort.toFixed(1)];
};

function nom(max)
{
    let nb_nom = Math.floor(Math.random() * max);   
    let nom = tab_nom.splice(nb_nom,1);
    return nom;
};

function assignation_classe(perso,max)
{
    let nb_classe = Math.floor(Math.random() * max);
    let classe = tab_classe.splice(nb_classe,1);
    return [perso,classe];
};

// -------------------------Fonction Jason-------------------------

function choix_attack(max)
{
    let nb_victime = Math.floor(Math.random() * max);
    return nb_victime;
};

function choix_action(perso)
{
    if ((Math.random() * (0.9-0.1) + 0.1).toFixed(1) < tab_perso[perso][1][0][1][1])
    {
        console.log(`${tab_perso[perso][0]} a fait 10 dégâts a Jason`);
        Jason -= 10;
    }

    else if ((Math.random() * (0.9-0.1) + 0.1).toFixed(1) < tab_perso[perso][1][0][1][2])
    {
        console.log(`${tab_perso[perso][0]} a fait 15 dégâts a Jason mais est mort(e)`);
        tab_mort.push(tab_perso.splice(perso,1));
        Jason -= 15;
    }

    else if ((Math.random() * (0.9-0.1) + 0.1).toFixed(1) < tab_perso[perso][1][0][1][0])
    {
        console.log(`${tab_perso[perso][0]} a etait tué(e) par Jason`);
        tab_mort.push(tab_perso.splice(perso,1));
    }

    else
    {
        console.log("Jason a préféré faire une sieste");
    };
};

// -------------------------Initialisation-------------------------
let tab_classe ;
let tab_nom = ["Michel","Gabriel","Baptiste","Marceau","Zélie","Victoria","Léopold","Capucine","Cassandre","Valentin"];
let tab_perso = creation__perso();
let tab_mort = [];
let Jason = 100;
let victime ;

// -------------------------Affichage Stat-------------------------
for (let i = 0; i < tab_perso.length; i++ )
{

    console.log(`${tab_perso[i][0]} est le/la ${tab_perso[i][1][0][0]} avec une chance de mourrir de ${tab_perso[i][1][0][1][0]}, une chance de faire des dégâts de ${tab_perso[i][1][0][1][1]} et une chance de mourrir en fesant des dégâts de ${tab_perso[i][1][0][1][2]}`);
};

// -------------------------Main Boucle-------------------------
while (Jason > 0 && tab_mort.length != 5 )
{
    victime = choix_attack(tab_perso.length);
    choix_action(victime);
};

// -------------------------Affichage Fin-------------------------
if (Jason > 0 )
{
    document.write("Jason a tué tout le monde");
}

else 
{
    document.write("Jason est mort : RIP a ");
    for (let i = 0; i < tab_mort.length; i++)
        document.write(`${tab_mort[i][0][0]}, `);
};
