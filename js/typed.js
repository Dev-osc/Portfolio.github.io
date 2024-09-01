var typed = new Typed("#typed", {
    strings: ["Hola, soy Oscar Marín "], // Aquí puedes añadir más textos si deseas.
    typeSpeed: 93,       // Velocidad de escritura.
    backSpeed: 50,       // Velocidad de borrado.
    loop: true          // Cambia a `true` si deseas que se repita.
  });
  /**
   * Qué hace: Este código inicializa la animación de Typed.js:
"#typed": Selecciona el elemento en el que se escribirá el texto.
strings: ["Oscar"]: Especifica el texto que se escribirá.
typeSpeed: 50: Define la velocidad de escritura (50 ms por letra).
backSpeed: 25: Define la velocidad de borrado (aunque no se usa aquí ya que no hay bucle).
loop: false: Indica que la animación no se repetirá; se ejecutará una sola vez.
Resumen:
Incluir Typed.js: Permite usar la biblioteca en tu página.
Añadir el contenedor: Define dónde aparecerá el texto animado.
Inicializar Typed.js: Configura cómo se verá la animación: qué texto se escribirá, a qué velocidad, y si se repetirá o no.
   */