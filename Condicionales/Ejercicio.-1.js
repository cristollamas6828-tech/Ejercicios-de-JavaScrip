let saldo = 1000


function cajero(opcion, monto) {
    switch (opcion) {
        case "consultar":
            console.log("Tu saldo es", saldo)
            break;
        case "depositar":
            if (saldo > 0) {
                saldo += monto;
                console.log("Has depositado $", monto, ".Saldo actualizado $",saldo)
            } else {
                console.log("El monto a depositar debe ser mayor a 0")
            }
            break;
        case "retirar":
            if (monto > 0 && monto <= saldo) {
                saldo -= monto;
                console.log("Retiro exitoso de $",monto," Tu saldo restante es: $",saldo);
            } else {
                console.log("Error: Saldo insuficiente. Solo tienes $" + saldo);
            }
            break;
        default:
            console.log("Opccion invalidad")
    }
}

cajero("consultar")
cajero("depositar", 600)
cajero("retirar", 150)

