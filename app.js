function agregarAmigo(){
    var input = document.getElementById("amigo");
    var nombre = input.value.trim();

    if (nombre !== "") {
        var lista = document.getElementById("listaAmigos");
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        input.value = ""; 
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}
function sortearAmigo() {
    var lista = document.getElementById("listaAmigos");
    var items = lista.getElementsByTagName("li");
    
    if (items.length > 0) {
        var indiceAleatorio = Math.floor(Math.random() * items.length);
        var seleccionado = items[indiceAleatorio].textContent;
        
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>Amigo secreto seleccionado: " + seleccionado + "</li>";
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
