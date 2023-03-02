const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayCard(data.meals))
}

const DisplayCard = meals =>{
    const mealCard = document.getElementById('meal-card');
    mealCard.innerHTML ="";
    console.log(meals)
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `         
        <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
            <button onclick="modalDetail(${meal.idMeal})" type="button" class="btn btn-outline-danger mx-auto d-block" data-bs-toggle="modal" data-bs-target="#exampleModals">
            Information
            </button>
        </div>

        `
            
        mealCard.appendChild(div);
        });
}
loadMeals();

const FoodSearching = () =>{
   const takingValue = document.getElementById('food-search').value;
   loadMeals(takingValue);
    
}

const modalDetail = (idMeal) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res => res.json())
    .then(data => idMeals(data.meals[0]))
}
const idMeals = (mealing) =>{
    const taking = document.getElementById('exampleModalLabel');
    taking.innerHTML = mealing.strMeal;
    const takings = document.getElementById('meal-body');
    takings.innerHTML = `
    <img class ="img-fluid pb-4" src ="${mealing.strMealThumb}">
    <p class ="fw-bold">${mealing.strInstructions}</p>
    `
}