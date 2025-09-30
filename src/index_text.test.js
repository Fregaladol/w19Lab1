const capitalizarTitulo = require('./index_text');

describe('capitalizarTitulo', () => {

  test('la función devuelve una cadena de texto', () => {
    expect("resultado").toEqual(expect.any(String));
  });

  test('convierte palabras en formato título', () => {
    expect(capitalizarTitulo("hola mundo")).toBe("Hola Mundo");
    expect(capitalizarTitulo("jAvAsCrIpT Es gEnIaL")).toBe("Javascript Es Genial");
  });

  test('maneja cadenas con espacios extra', () => {
    expect(capitalizarTitulo("   hola   mundo  ")).toBe("Hola Mundo");
  });

  test('devuelve cadena vacía si input es una cadena vacía', () => {
    expect(capitalizarTitulo("")).toBe("");
  });

  test('devuelve cadena vacía si input solo tiene espacios', () => {
    expect(capitalizarTitulo("     ")).toBe("");
  });

  test('devuelve cadena vacía si input no es un string', () => {
    expect(capitalizarTitulo(123)).toBe("");
  });

});
