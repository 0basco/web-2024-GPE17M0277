module.exports = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => {
      if (b === 0) {
        return undefined; 
      }
      return a / b;
    }
  };
  