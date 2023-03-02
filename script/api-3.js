const program = dating =>{
  const fetching = `https://restcountries.com/v3.1/region/${dating}`
    fetch(fetching)
    .then(res => res.json())
    .then(data => displayRegion(data))
}
const displayRegion = (data) =>{
    console.log(data)
    //const uniqueRegions = [...new Set(countries.map(country => country.region))];
    for(const region of data){
      const regions = document.getElementById('region');
      const gettingRegion = document.createElement('select');
      gettingRegion.innerHTML = `
      <select>Filter by region
      <option>${region.region}</option>
      </select>
      `
    regions.appendChild(gettingRegion);
    }
   
}
program();