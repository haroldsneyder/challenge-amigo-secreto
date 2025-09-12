// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Método para cargar los valores a la lista visible
function asignarTextoElemento(elemento, texto){ //Indico que se recibirán dos parámetros

    //elemento del HTML
    let elementoHTML = document.querySelector(elemento);

    //Texto efectivo
    elementoHTML.innerHTML = texto;

    return;

}

//Método para tomar el valor ingresado por el usuario
function agregarAmigo(){    

    //Se toma el valor del objeto y se carga en la variable local
    let nombreAmigo = document.getElementById('amigo');

    //Se valida que el objeto no se encuentre vacío
    if(typeof nombreAmigo === "String" && nombreAmigo.lenght === 0){

        //Se indica por consola que el nombre está vacío
        alert('Debe indicar el nombre');

    }else if(nombreAmigo === null){

        //Se indica por consola que la cadena es nula
        alert('Debe ingresar un valor');

    }else{
        
        //Cargo el nombre del amigo dentro del arreglo
        amigos.push(nombreAmigo);

        //Se carga el valor a la lista visual
        asignarTextoElemento('listaAmigos', `${amigos}`);
    }    

    return;

}

//Método para realizar el sorteo
function sortearAmigo(){
    
}