const loadCocktail = (search) =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displayData(data.drinks))
}

const displayData = drinks =>{
    const getValue = document.getElementById('card-section');
    //console.log(drinks) 
    drinks.forEach(drink => {     
        const again = document.createElement('div');
        again.innerHTML = `
     <div class="card mb-3 mx-auto d-block" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${drink.strDrinkThumb}" class="img-fluid rounded-start pt-4 px-1" alt="...">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">${drink.strDrink}</h5>
             <p class="card-text">${drink.strInstructions}</p>
           </div>
         </div>
        </div>
        <button onclick="searching()" type="button" class="btn btn-outline-warning mx-auto d-block my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          More Details
        </button>
      </div>`
      getValue.appendChild(again);
    });
}

const searching = () =>{
    const mains = document.getElementById('input-box').value;
    loadCocktail(mains);
    
}
loadCocktail();