let rojo = Math.random() * 256;
let verde = Math.random() * 256;
let azul = Math.random() * 256;

const colores = (r, g, b) => {
  r = Math.trunc(rojo);
  g = Math.trunc(verde);
  b = Math.trunc(azul);
  console.log(`El color es R: ${r}, G: ${g}, B: ${b}`)
}

colores(rojo, verde, azul);
