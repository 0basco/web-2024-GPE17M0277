const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 3000;

app.get('/somar/:a/:b', (req, res) => {
  const resultado = calculadora.somar(parseFloat(req.params.a), parseFloat(req.params.b));
  res.send(`A soma de ${req.params.a} e ${req.params.b} é ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const resultado = calculadora.subtrair(parseFloat(req.params.a), parseFloat(req.params.b));
  res.send(`A subtração de ${req.params.a} por ${req.params.b} é ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const resultado = calculadora.multiplicar(parseFloat(req.params.a), parseFloat(req.params.b));
  res.send(`A multiplicação de ${req.params.a} e ${req.params.b} é ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const resultado = calculadora.dividir(parseFloat(req.params.a), parseFloat(req.params.b));
  if (resultado === undefined) {
    res.status(400).send('Divisão por zero não é permitida.');
  } else {
    res.send(`A divisão de ${req.params.a} por ${req.params.b} é ${resultado}`);
  }
});

app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
