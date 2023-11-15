alert("Bienvenu dans ce programme, il va vous permettre de gérer vos taches")
let alerte= function(){
    prompt("Notre menu" + "\n\n"+ "-  -  -  -  -  -  -  -   " + "\n\n\n" + "1. Ajouter une tache" + "\n\n" + "2. Lister les taches" + "\n\n" + "3. Supprimer une tache"+ "\n\n" + "4. Etat de la tache"+ "\n\n" + "5. Quitter" + "\n\n\n")
    }
alerte()

const liste = {
    task: "edit",
    completed:false,

}
let tab=[]

// ajouter une tache
function addTask(tab) {
    let newtask=prompt("tapez la tache à ajouter");
    const task = {
        task: newtask,
        completed:false,
    }

    tab.push(task);
    console.log(tab[0])
}
//  addTask(tab)


function viewTasks(tab) {
    let affichage=""
    if(tab.length <= 0){
        alert('aucun élément dans le tableau')
        return 0;
    }
    for(let i= 0; i< tab.length; i++){
        if(tab[i].completed== true){
        affichage += i + " : " + tab[i].task + " | oui"
        }else{
        affichage += i + " : " + tab[i].task + " | non"

        }
    }
    alert(affichage)
}
// viewTasks(tab)

function removetasks(tab){
    // addTask(tab)
    // viewTasks(tab)
    let indice = prompt("specifiez un élement à supprimer")
    tab.splice(indice,1);
    return 1;
}
// removetasks(tab)
// viewTasks(tab)

function completTask(tab) {
    addTask(tab)
    viewTasks(tab)
    let indice = prompt("scpecifiez la tache à modifier")
    tab[indice].completed = true;
    return 1;
}
completTask(tab)
viewTasks(tab)
