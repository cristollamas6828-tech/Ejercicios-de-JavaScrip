let saldo = 1000


function cajero(opcion, monto) {
    switch (opcion) {
        case "consultar":
            console.log("Tu saldo es", monto)
            break;
        case depositar:
            if (monto > 0) {
                saldo += monto
                console.log("Tu saldo es de $", monto)
            }else{
                console.log("Monto insuficiente")
            }
            break;
        case "retirar":
            if (monto > 0) {
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

