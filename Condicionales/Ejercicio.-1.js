let saldo = 1000


function cajero(opcion, monto) {
    switch (opcion) {
        case "consultar":
            console.log("Tu saldo es", saldo)
            break;
        case "depositar":
            if (saldo > 0) {
                saldo += monto
                console.log("Tu saldo es de $", monto)
            }else{
                console.log("Monto insuficiente")
            }
            break;
        case "retirar":
            if (saldo > 0) {
                saldo -= monto
                console.log("Tu saldo es de $", monto)
            }else{
                console.log("Saldo insuficiente")
            }
            break;
        default :
        console.log("Opccion invalidad")
    }
}

cajero ("consultar")
cajero("depositar",500)
cajero("retirar",150)

