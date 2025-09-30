const areaTriangulo = require('./index_num');

describe('areaTriangulo', () => {

  test('Calcula el área correctamente', () => {
    expect(areaTriangulo(10, 5)).toBe(25);
  });

  test('Retorna 0 si base o altura son cero o negativas', () => {
    expect(areaTriangulo(0, 5)).toBe(0);
    expect(areaTriangulo(10, 0)).toBe(0);
    expect(areaTriangulo(-3, 5)).toBe(0);
  });

  test('Retorna NaN si alguno no es número', () => {
    expect(areaTriangulo('a', 5)).toBeNaN();
    expect(areaTriangulo(10, null)).toBeNaN();
  });

  test('El resultado es mayor que cero para valores positivos', () => {
    expect(areaTriangulo(10, 5)).toBeGreaterThan(0);
  });

  test('El resultado es cercano a 7.5 para base=s5 y altura=3', () => {
    expect(areaTriangulo(5, 3)).toBeCloseTo(7.5);
  });

});
