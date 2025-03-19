// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo (ya implementada anteriormente)
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);  // Agregar el nombre al array
    input.value = "";  // Limpiar el campo de entrada
    mostrarAmigos();  // Llamar a la función para mostrar los amigos en la lista
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiar la lista antes de agregar nuevos elementos

    console.log("Amigo añadido:", nombreAmigo);  // Verifica si se está agregando el nombre

    // Iterar sobre el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');  // Crear un nuevo <li>
        li.textContent = amigos[i];  // Poner el nombre del amigo en el <li>
        listaAmigos.appendChild(li);  // Añadir el <li> a la lista <ul>
    }
}

// Función para sortear un amigo secreto de manera aleatoria
function sortearAmigo() {
    // Validar que haya al menos un amigo en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade amigos primero.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del array (excluyendo el último índice)
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;
}