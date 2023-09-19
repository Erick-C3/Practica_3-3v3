const Persona = require("./Persona");

const pablo = new Persona();
const juan = new Persona();

juan.setAnimo(1);
pablo.setNombre("Pablo");
juan.setNombre("Juan");

pablo.saludaA(juan);
