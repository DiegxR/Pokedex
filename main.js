// const getGlass = new Promise((resolve, reject)=>{
//     const question = prompt('¿Se compro el azucar?')
//     isBuyed = question === 'si'
//     setTimeout(()=>{
//         let quantity
//         if (isBuyed) {
//             quantity = prompt('¿Cuantas compro?');
//              resolve(quantity)
//         }else{
//             reject(0);
//         }
//     }, 4000)
// });
// console.log('Hola 1');
// console.log('Hola 2')
// getGlass.then((response) => {
//     console.log(response)
// })
// .catch((error) =>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log('Promesa terminada')
// })
// console.log('Hola 3')

//get pokemons
// const listContainer = document.getElementById('listContainer');
// console.log(listContainer)
// const URL = 'https://pokeapi.co/api/v2/pokemon';
// const response = fetch(URL);
// response.then(result => result.json())
// .then((data) => {
//     console.log(data)
//     data.results.forEach(pokemon => {
//         listContainer.innerHTML += `
//         <li>${pokemon.name}</li>
//         `
//     });
// })
// .catch((error)=>{
//     console.log(error)
// })

// Pokemon nombre, orden, habilidades y experiencia
const boton = document.getElementById('btn');
const listContainer = document.getElementById('listContainer');

const renderCard = (data) =>{
    listContainer.innerHTML += `
    <div id='card'>
    <h1>${data.name}</h1>
    <img src="${data.sprites.other["official-artwork"]["front_default"]}">
    <p>Order: ${data.order}</p>
    <p>Habilidades:</p>
    <ul>
    ${data.abilities.map(element => `<li>${element.ability.name}</li>`)}
    </ul>
    <h3>Exp ${data.base_experience}</h3>
    </div>
    `
}
boton.addEventListener('click', () =>{
    listContainer.innerHTML += `
    <img src="./Pokeball.png" id='pokeball'>
    `
    const pokeball = document.getElementById('pokeball');
    setTimeout(() =>{
    listContainer.removeChild(pokeball)
    const numPokemon = Math.floor((Math.random()*19)+1)
    let url = `https://pokeapi.co/api/v2/pokemon/${numPokemon}/`;
    const result = fetch(url);
    result.then(resulta=> resulta.json())
    .then(data => renderCard(data))
    }, 2000)

})

