
document.getElementById('submitMainSearch').addEventListener('click',function(){
    let input = document.getElementById('inputMainSearch').value;
    let tabRecipes = getRecipesByName(input);
    display(tabRecipes);
});

document.getElementById('inputMainSearch').addEventListener('keyup',function(){
    let input = document.getElementById('inputMainSearch').value;
    let tabRecipes = getRecipesByName(input);
    display(tabRecipes);
});


/**
 * Renvoie un tableau contenant les recettes dont le nom correspond a la recherche
 * @param {*} name : nom de recettes recherchées 
 */
function getRecipesByName(name){
    let result = [];

    recipes.forEach(recette => {
        if(recette.name.toLowerCase().includes(name.toLowerCase())){
            result.push(recette);
        }
    });
    
    return result;
}

/**
 * Affiche toutes les recettes d'un tableau
 * @param {*} tabRecipes : tableau des recettes a afficher
 */

function display(tabRecipes){
    document.getElementById('recettes').innerHTML = '';
    tabRecipes.forEach(recette => {
        let html = '';
        html +=  `
        <div class='recette'>
            <img src='images/i1.jpg'>
            <div class='recetteInfo'>
                <span>
                    <h1 class='titre'>${recette.name}</h1>
                    <i class = 'fas fa-clock'></i>
                    <h1>${recette.time} min</h1>
                </span>
                <div class='detail'>
               <ul> `;

        recette.ingredients.forEach(i=>{
            html += `
            <li>${i.ingredient+' '+
            (i.hasOwnProperty('quantity')?i.quantity+' ':'')+
            (i.hasOwnProperty('quantite')?i.quantite+' ':'')+
            (i.hasOwnProperty('unit')?i.unit:'')+
            (i.hasOwnProperty('unite')?i.unite:'')}</li>
            `
        });
        let desc = recette.description;
        html += `</ul>
                <p>
                ${(desc.length<200)?desc:desc.slice(0,200)+'...'}
                </p>
            </div>
        </div>
        </div>`;
        
        document.getElementById('recettes').innerHTML+=html;
    });
}
