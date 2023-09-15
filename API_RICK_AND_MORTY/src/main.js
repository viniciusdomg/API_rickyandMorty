const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const cont = document.querySelector('.container');


//Nesta parte eu passei um parêmetro para consumir a API apenas personagens específicos!!
const fetchPersonagem = async (character) => {
    const Response = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`);
    //console.log(Response);
    const data = await Response.json();
    return data;
}

mostrarMenu();
const filtroPersonagem = async (character) =>{
    const data = await fetchPersonagem(character);


    data.results.map(function(results) { 
        cont.innerHTML = ` 
        <div class="card"> <img src=` +results.image+`> 
        <strong><font size="5">`+results.name+` </font></strong><br>
        <b><span><font size="4">Status: `+results.status+`</font></span></b> <br>
        <i><b><font size="3"> Especie: `+results.species+`</font></b></i><br>
        <i><b><font size="2"> Universo: `+results.origin.name+`</font></b></i></div>
        `;
    })
    
}

//Aqui adicionei uma função para pegar o valor digitado na pesquisa do formulário!!
//Fiz um Evento para pegar o valor passado dentro do formulário
//Passei o valor obtido dentro do formulário como parâmentro para uma constante (filtroPersonagem) para filtrar.
form.addEventListener('submit', (event) => {

    event.preventDefault();

    filtroPersonagem(input.value);

})

//Nesta parte do código eu consumi a API, mostrando todos os resultados como cartões!!!
function mostrarMenu() {
fetch('https://rickandmortyapi.com/api/character/', {method: 'GET'})
    .then(resp => resp.json())
    .then(function(json){
        console.log(json);

        //esse "results" é onde está localizado os dados da API
        json.results.map(function(results){ 
            cont.innerHTML +=`
            <div class="card"> <img src=` +results.image+`> 
            <strong><font size="5">`+results.name+` </font></strong><br>
            <b><span><font size="4">Status: `+results.status+`</font></span></b> <br>
            <i><b><font size="3"> Especie: `+results.species+`</font></b></i><br>
            <i><b><font size="2"> Universo: `+results.origin.name+`</font></b></i></div>
            `;
        })
    })
}

