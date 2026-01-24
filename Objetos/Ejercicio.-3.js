const alumno ={
    nombre : "Crito Llamas",
    semestre : "Sexto",
    calificacion1 : 98.5,
    calificacion2 : 90.6,
    calificacion3 : 95.6
} 
const promedio = (alumno.calificacion1+ alumno.calificacion2+alumno.calificacion3)/3
const apronado = promedio >=60

console.log("Alumno:",alumno.nombre)
console.log("Tu promedio es de "+ promedio)
//console.log("El Alumno: " ,alumno.nombre , "esta:" ,apronado)

/**if(promedio >= 60){
    console.log("Aprobado")
}else{
    console.log("Reprobado")
}*/
