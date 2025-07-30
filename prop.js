function lol() {
    const respuesta = document.getElementById("t2").value;
    const nombre = String(respuesta)

    mensaje.style.display = "block";
    const url = "https://pokeapi.co/api/v2/pokemon/" + nombre

    fetch(url)
    .then(Response => Response.json())

    console.log(url, nombre)
    return url
}

function trol() {
    const res = document.getElementById("t5").value;
    const des = String(res)
    let resultado = document.getElementById("resultao")
    resultado.textContent = " "

    fetch(lol())
    .then(Response => Response.json())

    .then(data => {
        console.log(data.abilities.length)
        

        if ((des) === "1") {for (let i = 0; i < data.abilities.length; i++) {
            let no = i + 1
            resultado.textContent += no + ". " + data.abilities[i].ability.name + "\n"
        }}
        
        if ((des) === "2") {for (let i = 0; i < data.game_indices.length; i++) {
            let no = i + 1

            resultado.textContent += no + ". " + data.game_indices[i].version.name + "\n"
        }}

        if ((des) === "3") {resultado.textContent = data.height + "kg"}

        if ((des) === "4") {for (let i = 0; i < data.moves.length; i++) {
            let no = i + 1
            resultado.textContent += no + ". " + data.moves[i].move.name + "\n"
        }}
    })
}





    



