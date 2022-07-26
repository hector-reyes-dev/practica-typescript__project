interface Usuario {
  nombre: string;
  apellido: string;
  usuarioPlatzi: string;
  edad: number;
  correo: string;
  mayorEdad: boolean;
  dineroAhorrado: number;
  deudas: number;
}

const usuario: Usuario = {
  nombre: "Gerardo",
  apellido: "Bautista",
  usuarioPlatzi: "hector_reyes",
  edad: 29,
  correo: "hectordevx@gmail.com",
  mayorEdad: true,
  dineroAhorrado: 50000,
  deudas: 10000,
};

console.log(`${usuario.nombre} ${usuario.apellido}`);
console.log(usuario.dineroAhorrado - usuario.deudas);
