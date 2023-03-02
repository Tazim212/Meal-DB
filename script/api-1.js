// practise problem-1
const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };
const adds = () =>{
  const valid = document.getElementById('header');
  const adding = document.createElement('h2');
  adding.innerHTML = `
  <h2 class ="heading">${person.message}</h2>
  `
  valid.appendChild(adding);
}
adds();

const again = () =>{
  const names = document.getElementById('section');
  const naming = document.createElement('div');
  naming.classList.add('nameList')
  naming.innerHTML= `
  <div class = "part-1">
  <h3>Person Name: ${person.result[0].name.common}</h3>
  <h4>age: ${person.result[0].age}
  <h4>Street: ${person.result[0].address.street}
  </div>
  <div class = "part-2">
  <h3>Person Name: ${person.result[1].name.common}</h3>
  <h4>age: ${person.result[1].age}
  <h4>Street: ${person.result[1].address.street}</h4>
  </div>
  `
  names.appendChild(naming);
}
again();


//const uniqueRegions = [...new Set(countries.map(country => country.region))];
//Mehedi Mosharrof9:40 PM
//https://restcountries.com/v3.1/region/{region}
//https://restcountries.com/v3.1/region/europe
