function capitalizarTitulo(frase) {
  if (typeof frase !== 'string' || frase.trim() === '') {
    return '';
  }

  return frase
    .trim()  
    .split(/\s+/)
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}

module.exports = capitalizarTitulo;
