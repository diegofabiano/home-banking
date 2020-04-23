//Declaración de variables
var nombreUsuario = "Diego Fabiano";
var saldoCuenta = 57000;
var limiteExtraccion = 10000;
var luz = 210;
var agua = 350;
var telefono = 425;
var internet = 570;
var cuentaAmiga1 = "12345";
var cuentaAmiga2 = "54321";
var usuario = "diegofa";
var contraseña = "1893";
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

}
var dineroDepositado = function (plata) {
    saldoCuenta += plata;
}

var dineroExtraido = function (plata) {
    saldoCuenta -= plata;
}

var cambioLimite = function (limite) {
    limiteExtraccion = limite;
    } 
    
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
        extraccion = prompt ("Establezca su límite de extracción");
        extraccion = parseInt (extraccion);
        cambioLimite (extraccion);
        actualizarLimiteEnPantalla ();
    }

function extraerDinero() {
    plataExtraida = prompt ("Cuánto dinero desea extraer?");
    plataExtraida = parseInt (plataExtraida)
    if (plataExtraida > saldoCuenta) {
        alert ("No posee sufiente saldo para hacer la extracción.");
    } else if (plataExtraida > limiteExtraccion) {
        alert ("El monto supera el límite de extracción.");
    } else if (plataExtraida % 100 !== 0) {
        alert ("El cajero sólo entrega billetes de $100");
    } else {
        saldoAnterior = saldoCuenta;
        dineroExtraido (plataExtraida);
        alert ("Has extraído: $" + plataExtraida + "\n saldo anterior: $" + saldoAnterior + "\n saldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla ();
    }
}

function depositarDinero() {
    plataDepositada = prompt ("Cuánto dinero desea depositar?");
    plataDepositada = parseInt (plataDepositada);
    if (isNaN (plataDepositada) || plataDepositada == "") {
        alert ("Indique un monto válido.");
    } else {
        saldoAnterior = saldoCuenta;
        dineroDepositado (plataDepositada);
        alert ("Has depositado: $" + plataDepositada + "\nsaldo anterior: $" + saldoAnterior + "\nsaldo actual: $" + saldoCuenta);
        actualizarSaldoEnPantalla ();
    }
}

function pagarServicio() {
    saldoPasado = saldoCuenta;
    pagoServicio = prompt (" ¿Qué servicio desea pagar? \n 1- Luz; $210 \n 2- Agua: $350 \n 3- Teléfono: $425 \n 4- Internet: $570");
    switch (pagoServicio) {
        case "1":

            if (luz > saldoCuenta){
                alert ("No tiene saldo suficiente para pagar el servicio.");
            } else {
            dineroExtraido (luz);
            actualizarSaldoEnPantalla ();
            alert ("Has pagado el servicio de luz" + "\n Luz: $" + luz + "\nsaldo anterior: $" +
            saldoPasado + "\nsaldo actual: $" + saldoCuenta);
            }
            break;
        case "2":
             if (agua > saldoCuenta){
                 alert ("No tiene saldo suficiente para pagar el servicio.");
            } else {
            dineroExtraido (agua);
            actualizarSaldoEnPantalla ();
            alert ("Has pagado el servicio de agua" + "\n Agua: $" + agua + "\nsaldo anterior: $" +
            saldoPasado + "\nsaldo actual: $" + saldoCuenta);
            }
            break;
        case "3":
            if (telefono > saldoCuenta){
            alert ("No tiene saldo suficiente para pagar el servicio.");
            } else {
            dineroExtraido (telefono);
            actualizarSaldoEnPantalla ();
            alert ("Has pagado el servicio de teléfono" + "\n Teléfono: $" + telefono + "\nsaldo anterior: $" +
            saldoPasado + "\nsaldo actual: $" + saldoCuenta);
            }
            break;
        case "4":
            if (internet > saldoCuenta){
            alert ("No tiene saldo suficiente para pagar el servicio.");
            } else {
            dineroExtraido (internet);
            actualizarSaldoEnPantalla ();
            alert ("Has pagado el servicio de internet" + "\n Internet: $" + internet + "\nsaldo anterior: $" +
            saldoPasado + "\nsaldo actual: $" + saldoCuenta);
            }
            break;
            default:
            alert ("No seleccionó un servicio válido.");       
    }


}

function transferirDinero() {
    transferencia = prompt ("¿Cuánto dinero desea transferir?");
    transferencia = parseInt (transferencia);
    
    if (transferencia > saldoCuenta) {
        alert ("No posee fondos suficientes para dicha transacción.");
    } else if (transferencia == null || transferencia == "") {
        alert ("Indique un monto válido.");
    } else if (isNaN (transferencia)) {
        alert ("Coloque solo el valor númerico que desee transferir.");
    }
    else {
        cuentaTransferencia = prompt ("Indique a que cuenta desea transferir")
    }
    switch (cuentaTransferencia) {
        case "12345":
            dineroExtraido (transferencia);
            actualizarSaldoEnPantalla ();
            alert ("Usted transfirió $ " + transferencia + " a la cuenta 12345. Su nuevo saldo es $ " + saldoCuenta);
            break;
        case "54321":
            dineroExtraido (transferencia);
            actualizarSaldoEnPantalla ();
            alert ("Usted transfirió $ " + transferencia + " a la cuenta 54321. Su nuevo saldo es $ " + saldoCuenta);
            break;
        default:
            alert ("No seleccionó una cuenta válida.")
        
    }
    

}

function iniciarSesion() {
    iniciosesion = prompt ("Ingrese su usuario.");
    if (iniciosesion == "diegofa") {
        clave = prompt ("Ingrese su contraseña");
    } else {
        alert ("Nombre de usurio incorrecto");
    }
    if (clave == "1893") {
        alert ("Bienvenido/a " + nombreUsuario + " a su Home Banking. Ya puede emepezar a operar.");
    } else {
        alert ("Contraseña incorrecta. Por seguridad su dinero ha sido retenido.");
        saldoCuenta -= saldoCuenta;
        actualizarSaldoEnPantalla ();
    }


}
function sucursales () {
    alert ("CABA: Av. Cabildo 2902" + "\n Buenos Aires: Bartolomé Mitre 326" + "\n Córdoba: Pres. Perón 653" + "\n Santa Fé: Guardias Nacionales 47")
}

function telefonos () {
    alert ("Atención al cliente: 0810-777-4444" + "\n Denuncias por robo o extravío: 0800-555-0836" + "\n Socios KEIM: 0800-333-9002")
}

function beneficios () {
    programa = prompt ("Ingrese su DNI para acumular puntos con sus comprar y acceder a los beneficios");
    programa = parseInt (programa);
    alert ("Gracias. A partir de ahora todas sus compras suman puntos.")
    
}

function adicional () {
    tarjeta = prompt ("Ingrese el nombre de la persona a la cuál desea otorgarle un adicional de su tarjeta");
    tarjeta = prompt ("Ingrese el apellido");
    tarjeta = prompt ("Por último ingrese el DNI");
    alert ("Los datos ingresados están siendo verificados. En los próximos días recibirá, en su domicilio, el nuevo plástico adicional a su tarjeta listo para usar. Gracias por confiar en nuestro banco. ")
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
