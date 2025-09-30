function capitalizarTitulo(frase) {
  if (typeof frase !== 'string' || frase.trim() === '') {
    throw new TypeError('La frase debe ser un string no vacío');
  }

  return frase
    .trim()  
    .split(/\s+/)
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
    .join(' ');
}



module.exports = capitalizarTitulo;
