class Persona {
    #nombre = "def nombre";
    #animo = 0;
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setAnimo(animo){
        this.#animo = animo;
    }

    getNombre() {
        return this.#nombre;
    }

    saludaA(unaPersona) {
        console.log("Hola! como estas " + unaPersona.getNombre() + "?");
        unaPersona.devolverSaludoA(this);
    }

    devolverSaludoA(unaPersona) {
        if (this.#animo >= 0) {
            console.log("Hola "+ unaPersona.getNombre() + "! estoy bien! gracias");
            if (this.#animo > 0) {
                this.#animo ++;
                console.log(`Debug: Animo de ${this.#nombre} actualizado a ${this.#animo}`);
                this.iniciaConversacionCon(unaPersona);
            } else {
                this.cambioDeVereda();
            }
        }else{
            this.ignorar();
        }
    }

    ignorar(){
        console.log("*pasos*");
    }

    cambioDeVereda() {
        console.log("...");
    }

    iniciaConversacionCon(unaPersona) {
        console.log("A donde vas " + unaPersona.getNombre() + "?");
        unaPersona.seguirConversacionCon(this);
    }

    seguirConversacionCon(unaPersona) {
        console.log("Voy al laburo");
        this.#animo++;
        console.log(`Debug: Animo de ${this.#nombre} actualizado a ${this.#animo}`);

    }

}

module.exports = Persona;