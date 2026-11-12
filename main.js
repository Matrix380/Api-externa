const formulario = document.getElementById("formPoke")


formulario.addEventListener("submit", async function(evento){
    evento.preventDefault();//evitar que a página recarregue

    const id = document.getElementById("idPoke").value

    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const pokemon = await resposta.json()

    document.getElementById("nomePokemon").textContent = pokemon.name;

    document.getElementById("imgPoke").src = pokemon.sprites.front_default;

    document.getElementById("imgPokeshiny").src = pokemon.sprites.front_shiny;

    document.getElementById("TypePoke").textContent = pokemon.types[0].type.name;

    document.getElementById("MovePoke").textContent = pokemon.moves[0].move.name;

    document.getElementById("AbilPoke").textContent = pokemon.abilities[0].ability.name;

    document.getElementById("PesoPoke").textContent = pokemon.weight;

    document.getElementById("audioPoke").src = pokemon.cries.legacy;
    
})