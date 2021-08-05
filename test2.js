
document.getElementById('submitMainSearch').addEventListener('click',function(){
    let input = document.getElementById('inputMainSearch').value;
    let tabRecipes = recipes.slice();
    tabRecipes = tabRecipes.filter(filterName(input));
    display(tabRecipes);

});


function filterName(name){
    return function(recette){
        if(recette.name.toLowerCase().includes(name.toLowerCase())){
            return recette;
        }
    }
}

/**
 * Affiche toutes les recettes d'un tableau
 * @param {*} tabRecipes : tableau des recettes a afficher
 */

 function display(tabRecipes){
    document.getElementById('recettes').innerHTML = '';
    tabRecipes.forEach(recette => {
        
        let ingredientsHTML = '';
        recette.ingredients.forEach(i=>{
            ingredientsHTML += `
            <li>${i.ingredient+' '+
            (i.hasOwnProperty('quantity')?i.quantity+' ':'')+
            (i.hasOwnProperty('quantite')?i.quantite+' ':'')+
            (i.hasOwnProperty('unit')?i.unit:'')+
            (i.hasOwnProperty('unite')?i.unite:'')}</li>
            `
        });

        let description = recette.description;
        if(description.length>200){
            description = description.slice(0,200)+'...';
        }

        let html =  `
        <div class='recette'>
            <img src='images/i1.jpg'>
            <div class='recetteInfo'>
                <span>
                    <h1 class='titre'>${recette.name}</h1>
                    <i class = 'fas fa-clock'></i>
                    <h1>${recette.time} min</h1>
                </span>
                <div class='detail'>
               <ul>
                    ${ingredientsHTML}
               </ul>
                <p>
                    ${description}
                </p>
            </div>
        </div>
        </div>`;


        document.getElementById('recettes').innerHTML+=html;
    });
}
