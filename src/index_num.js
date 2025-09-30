function areaTriangulo(base, altura) {
  if (typeof base !== 'number' || typeof altura !== 'number') return NaN;
  if (base <= 0 || altura <= 0) return 0;
  return (base * altura) / 2;
}

module.exports = areaTriangulo;
