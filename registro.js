//Bienvenida

const usuario =prompt ("Bienvenido! Ingrese su Nombre");

let saludo = confirm("¿Queres recibir nuestras novedades?");

let Nombre= "personal";
console.log (Nombre);
if (saludo) {
    const Nombre= prompt ("Dejanos tu Mail");
}
else { 
    alert ("No te pierdas la oportunidad de esterarte toda las novedades primero!");
}

//usuario

let login = false
let pass = "aperegina"
let intentos = 0

do {
    let passIngresada = prompt ("Ingrese su contraseña para descuentos")
    if( passIngresada === pass){
        login = true
        alert ("contraseña correcta")
    } else {
        alert ("contraseña equivocada")
        console.log ('le quedan ${3-intentos} intentos')
    }
 } while (!login && intentos ===3)
if (login) {
    alert ("Bienvenido")
}
    
while (repetir) {
   
    console.log ( 'intentaste ${++contador} veces')
    repetir= confirm("Deseas continuar?")
};

//carrito


const prendas = [
    { id: 1, nombre:'remera', precio:20 },
    { id:2, nombre: 'pantalon', precio:40},
    {id:3, nombre:'blusa', precio:30},
    {id:4, nombre:'remera plateada',precio:50},
    { id:5, nombre:'vestido', precio :70},
    ];
    
    function mostrarPrendas (){
        let listaPrendas = "Productos disponibles:"
        let i=0
    for( prendas of prendas) {
        i++
        listaPrendas += '\n ${i} - $(prendas)'
    }
    alert (listaPrendas)
}