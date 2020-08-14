//console.log('My files are connected')

const baseURL = "https:pokeapi.co/api/v2/pokemon/";
let url;
// SEARCH FORM
const searchChallenger = document.getElementById("searchChallenger");
const searchFormChallenger = document.getElementById("formChallenger");
const submitBtnChallenger = document.querySelector("submit")

//Results Section
const sectionChallenger = document.getElementById("sectionChallenger");

searchFormChallenger.addEventListener("submit", fetchResultsChallenger);

function fetchResultsChallenger(e) {
    e.preventDefault();
    let url = baseURL + searchChallenger.value;

    console.log("URL:", url);
    
    fetch(url)
    .then(function(result) {
        return result.json();
    })
    .then(function(json) {
        displayResultsChallenger(json);
    });

function displayResultsChallenger(json) {
    console.log("Display Results", json);
    while (sectionChallenger.firstChild) {
        sectionChallenger.removeChild(sectionChallenger.firstChild);
    }
    let pokemonChallenger = json;

    if(searchChallenger.length === 0) {
        console.log("No results");
    } else {
        let formChallenger = document.createElement("form");
        formChallenger.setAttribute("class", "formChallenger");
        let headingChallenger = document.createElement("h2");
        headingChallenger.setAttribute("id", "headingChallenger");
        let imgChallenger = document.createElement("img");
        imgChallenger.setAttribute("id", "imgChallenger");
        let clearFixChallenger = document.createElement("div");
        let paraChallenger = document.createElement("para");
        paraChallenger.setAttribute("class", "movesChallenger");

        headingChallenger.textContent = pokemonChallenger.species.name;
        console.log("Pokemon:", pokemonChallenger);

        if(pokemonChallenger.sprites.front_default.length > 0) {
            imgChallenger.src = pokemonChallenger.sprites.front_default;
            imgChallenger.alt = "Picture of the Pokemon";
        }

        paraChallenger.textContent = "Moves: ";

        for (let q = 0; q < 1; q++) {
            let spanChallenger = document.createElement("span");
            spanChallenger.setAttribute("class", "challengerMoves");
            spanChallenger.textContent += pokemonChallenger.moves[0].move.name + ", ";
            spanChallenger.textContent += pokemonChallenger.moves[3].move.name + ", ";
            spanChallenger.textContent += pokemonChallenger.moves[8].move.name + ", ";
            spanChallenger.textContent += pokemonChallenger.moves[11].move.name + ", ";
            paraChallenger.appendChild(spanChallenger);
        }
        clearFixChallenger.setAttribute("class", "clearfixChallenger");

        formChallenger.appendChild(headingChallenger);
        formChallenger.appendChild(clearfixChallenger);
        formChallenger.appendChild(imgChallenger);
        formChallenger.appendChild(paraChallenger);
        sectionChallenger.appendChild(formChallenger);
    }
}
}