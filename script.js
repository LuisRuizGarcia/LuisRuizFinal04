const charactersEl = document.getElementById("characters");
const namefilterEl = document.getElementById("name-filter");
const statusfilterEl = document.getElementById("status-filter");

async function getCharacters (name, status){
    let url = "https://rickandmortyapi.com/api/character/";
    if (name || status){
        url += '?';
        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url += `status=${status}`;
        }
    }
    const response = await fetch(url);
    const data = await response.json();


    return data.results;
}

async function displayCharacters (name, status) {
    const characters = await getCharacters(name, status);

    charactersEl.innerHTML = '';

    for(let character of characters){
        const card = document.createElement ('div');
        card.classList.add('character-card')

        card.innerHTML = `
        <img src="${character.image}"/>
        <h2>${character.name}</h2>
        <p> Status: ${character.status}</p>
        <p> Especia: ${character.species}</p>

        `;

        charactersEl.appendChild(card)
    }
}
 displayCharacters();

 namefilterEl.addEventListener('input', () => {
    displayCharacters(namefilterEl.value, statusfilterEl.value );
 });

 statusfilterEl-addEventListener('change', () =>{
    displayCharacters(namefilterEl.value, statusfilterEl.value );
 });