let tab=getItemTasks()

console.log(tab);


// const form= document.querySelector('form')
// form.addEventListener('submit',(event) =>{
//     event.preventDefault();
//     let valeur=document.querySelector('tache').value;
//     if(valeur== ''){
//     valeur.classList.add("error")

//     }else{
//     valeur.classList.remove("error")

//     }
//     addTask
// })
function verification(balise){
    if(balise.value== ''){
        balise.classList.add("error")
    }else{
        balise.classList.remove("error")
}
}
let ajouter= document.getElementById("btnValiderMot")
    ajouter.addEventListener("click", (event) =>{

        // pour annuler le comportement par defaut d'un formulaire
        event.preventDefault();
        addTask()

    })
// ajouter une tache
function addTask() {


    let newtask= document.querySelector(".tache");
    verification(newtask);


    tab.push({
        tache: newtask.value,
        completed : false,
    })
        newtask.value=''

        setItemTasks(tab)

        viewTasks()

        console.log(tab)

}

//    addTask(tab)

   function viewTasks() {
    // le paragraphe conteneur de la tache et des boutons
    let affichage=document.querySelector(".conteneur");
    affichage.innerHTML='';
     for(let i=0; i< tab.length ; i++){
        let paragraphe= document.createElement("p");
        paragraphe.setAttribute('class','paragraphe');
        paragraphe.innerHTML= tab[i].tache;
        affichage.append(paragraphe);

        // le premier bouton pour la suppression

        const btnsupprimer = document.createElement("button");
        btnsupprimer.setAttribute('class','supprimer');
        btnsupprimer.innerHTML= '<i class="fa-solid fa-trash-can"></i>';
        paragraphe.prepend(btnsupprimer);
        btnsupprimer.addEventListener('click',() => deleteTask(i))

        // le deuxième bouton pour completed

        const btncomplete = document.createElement("button");
        btncomplete.setAttribute('class','complet');
        btncomplete.innerHTML= '<i class="fa-solid fa-square-check"></i>';
        paragraphe.prepend(btncomplete);
        btncomplete.addEventListener('click',function(){
            btncomplete.innerHTML= 'complète'
            tab[i].completed= true;
            btncomplete.desabled= true;
            setItemTasks(tab)
            getItemTasks(tab)
            console.log(tab)
        })

     }

}
viewTasks()

//  viewTasks()

 function deleteTask(index) {
    // console.log(index);
     tab.splice(index,1)
     console.log(tab)
    setItemTasks(tab)
    // getItemTasks(tab)
     viewTasks()

 }


function setItemTasks(task){
// console.log('save');
    localStorage.setItem("taches", JSON.stringify(task));

}
function getItemTasks(){
    // localStorage.clear()
    let tableau= localStorage.getItem("taches")
    return tableau ? JSON.parse(tableau):[];
}

// à faire
// arrnager le fonctionnement du bouton supprimer
// arranger le fonctionnement du bouton complet
// arrnager le comportement de getitemtasks
// mettre ne place les règles de validation

// problème
// on ne peut supprimer que de haut en bas
//  quand on recharge la page le statut complète change