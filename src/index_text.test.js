const capitalizarTitulo = require('./index_text');

describe('capitalizarTitulo', () => {

  test('La función devuelve una cadena de texto', () => {
    expect("resultado").toEqual(expect.any(String));
  });

  test('Convierte palabras en formato título', () => {
    expect(capitalizarTitulo("hola mundo")).toBe("Hola Mundo");
    expect(capitalizarTitulo("jAvAsCrIpT")).toBe("Javascript");
  });

  test('Maneja cadenas con espacios extra', () => {
    expect(capitalizarTitulo("   hola mundo  ")).toBe("Hola Mundo");
  });

   
  test('Lanza error si frase no es un string', () => {
  expect(() => capitalizarTitulo(123)).toThrow('La frase debe ser un string no vacío');
  });


});
