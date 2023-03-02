const randoms = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => hippoVi(data))
}

const hippoVi = (data) =>{
    const randoming =document.getElementById('random-sect');
    const gettingRandom = document.createElement('div');
    gettingRandom.innerHTML = `
    <h4 class ="text-success">Advice #${data.slip.id}</h4>
    <p class ="fw-bold">${data.slip.advice}</p>
    <hr>
    `
    randoming.appendChild(gettingRandom);
}
randoms();