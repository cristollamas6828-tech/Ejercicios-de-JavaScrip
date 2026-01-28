const plataforma = {
    nombre: "IntelFlix",
    plan: "premium",
    usuario:{
        nombre: "Cristo Fernando",
        edad: 21
    }
}
perfiles:[{
    nombre: "Cristo",
    favoritos:["Dark","Breaking Bad"],
    historial:["Dark"]
},
{
    nombre: "Fernando",
    Favoritos: ["Gossip Girl", "Stranger Things"],
    historial:[]
}
];
//Ejercicio.-1
console.log(plataforma.usuario)

//Ejercicio.-2
if(plataforma.plan === "premium"){
    plataforma.plan = "principiante"
    console.log("EL plan se ha modificado")
    console.log("Plan:",plataforma.plan)
}

//Ejercicio .-3
let nuevaseire
let nuevaExiste = false

for(let i =0;i <plataforma.perfiles[0].favoritos.length; i++){
    if(plataforma.historial[i].historial === nuevaseire){
        nuevaExiste =true
    }
}

if(!nuevaExiste){
   plataforma.perfiles[0].favoritos.push(nuevaseire)
}

//Ejercicio.-4
if(plataforma.perfiles[0].historial.length >0){
    for(let i =0;i < plataforma.perfiles[0].historial.length; i++){
        console.log("Historial:", plataforma.perfiles[0].historial[i])
    }
}else{
    console.log("Historial vacio")
}
//Ejercicio.-5
if(plataforma.usuario.edad >=18){
    console.log("El usuario es mayor de edad")
}else{
    console.log("El usuario es menor de edad")
}