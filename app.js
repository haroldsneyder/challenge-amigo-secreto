// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


// Método para cargar la lista visual
function mostrarLista() {

    //Se captura la información del objeto listaAmigos
    let lista = document.querySelector('#listaAmigos');

    //Se agrega a la lista el objeto li para cada nuevo "amigo"
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

//Método para tomar el valor ingresado por el usuario
function agregarAmigo(){    

    //Se toma el valor del objeto y se carga en la variable local
    let nombreAmigo = document.getElementById('amigo').value.trim();

    //Se valida que el objeto no se encuentre vacío
    if(nombreAmigo.length === 0){

        //Se indica por consola que el nombre está vacío
        alert('Debe indicar el nombre');

        return;
    }
        
    //Cargo el nombre del amigo dentro del arreglo
    amigos.push(nombreAmigo);

    mostrarLista();

    // limpiar input
    document.getElementById('amigo').value = '';    

}

//Método para realizar el sorteo
function sortearAmigo(){
    
    //Se valida que el arreglo no esté vacío
    if(amigos.length == 0){

        alert("No hay amigos en la lista para sortear");

        return;

    }

    //Se genera un número entero aleatorio entre 0 y el tamaño del arreglo (sin incluirlo)
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    //Con ese índice, se obtiene el nombre correspondiente dentro del arreglo
    let nombreAleatorio = amigos[indiceAleatorio];

    //Se busca el elemento con id "resultado"
    let resultado = document.querySelector('#resultado');

    //Se reemplaza el contenido del elemento con el nombre sorteado, dentro de un <li> y le indico que lo deje en negrilla.
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombreAleatorio}</strong></li>`;

}