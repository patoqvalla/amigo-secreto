// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // Validar que el nombre no esté vacío
    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);  // Añadir el nombre a la lista
        input.value = "";  // Limpiar el campo de texto
        mostrarAmigos();  // Mostrar la lista de amigos en la pantalla
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiar la lista antes de mostrarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 personas para hacer el sorteo.");
        return;
    }

    let resultados = [];
    let amigosTemp = [...amigos];  // Copiar el arreglo de amigos para evitar modificar el original

    // Sortear los amigos secretos
    amigos.forEach(amigo => {
        const indiceAleatorio = Math.floor(Math.random() * amigosTemp.length);
        const amigoSecreto = amigosTemp.splice(indiceAleatorio, 1)[0];  // Extraer el amigo secreto

        resultados.push({ amigo, amigoSecreto });
    });

    mostrarResultado(resultados);
}

function mostrarResultado(resultados) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = "";  // Limpiar la lista de resultados

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = `${resultado.amigo} le tocó a ${resultado.amigoSecreto}`;
        listaResultado.appendChild(li);
    });
}