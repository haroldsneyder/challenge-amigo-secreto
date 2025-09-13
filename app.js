// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


// Método para cargar la lista visual
function mostrarLista() {

    let lista = document.querySelector('#listaAmigos');

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
    
}