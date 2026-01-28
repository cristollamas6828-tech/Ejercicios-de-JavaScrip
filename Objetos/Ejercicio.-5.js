const ticket = {
    id : "Tck-001",
    titulo : "Error en impresona",
    estado : "abierto",
    prioridad : "alta",
    area : "Sistemas",
    fecha : "2024-06-15 10:30:00",
    creador :{
        nombre : "Cristo",
        email : "cristo.llamas@alumnos.udg.mx"
    },
    asignados : ["Andres", "Ana"],
    comentarios :[
        {usuario: "Ana",mensaje: "Revisado el equipo"},
        {usuario: "Andres",mensaje: "Falta tóner"}
    ]
}
//Ejericio.-1
console.log("Titulo:", ticket.titulo, "Estado:",ticket.estado)
//Ejercicio.-2
if(ticket.estado === "abierto"){
    estado = "cerrado"
    console.log("Estado:",ticket.estado)
}
//ejercicio.-3
let nuevoMensaje = "Problema solucionado"
if(nuevoMensaje !== ""){
    ticket.comentarios.push({usuario: "Ana",mensaje: nuevoMensaje})
}

//Ejercicio.-4
if(ticket.asignados.length){
    for(let i=0; i < ticket.asignados.length; i++){
        console.log("Asignado:",ticket.asignados[i])
    }
}

//Ejercicio.-5
let nuevaPrioridad= "media"
if(
nuevaPrioridad === "alta"||
nuevaPrioridad === "media"||
nuevaPrioridad === "baja"
){
ticket.prioridad = nuevaPrioridad
}

//Ejercicio.-6
let anaComentario = false
for(let i =0;i <ticket.comentarios.length; i++){
    if(ticket.comentarios[i].usuario === "Ana"){
        anaComentario =true
    }
}

if(anaComentario){
    console.log("Ana ya comento en el ticket")
}else{
    console.log("Ana no ha comentado")
}