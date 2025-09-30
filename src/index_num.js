function areaTriangulo(base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') {
    throw new TypeError('Base y altura deben ser números');
  }
  if (base <= 0 || altura <= 0) return 0;
  return (base * altura) / 2;
}


module.exports = areaTriangulo;
