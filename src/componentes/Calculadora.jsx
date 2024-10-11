import React, { useState } from 'react';
import NumberInput from './NumberInput';
import Resultado from './Resultado';
import '../App.css';

const Calculadora = () => {
  const [numeros, setNumeros] = useState({ numero1: 0, numero2: 0 });

  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value) || 0
    });
  };

  const suma = () => numeros.numero1 + numeros.numero2;
  const resta = () => numeros.numero1 - numeros.numero2;
  const multiplicacion = () => numeros.numero1 * numeros.numero2;
  const division = () => (numeros.numero2 !== 0 ? numeros.numero1 / numeros.numero2 : 'No se puede dividir entre 0');

  return (
    <div className="calculadora-container">
      <h2>Calculadora</h2>
      <NumberInput
        label="Número 1"
        name="numero1"
        value={numeros.numero1}
        handleChange={handleChange}
      />
      <NumberInput
        label="Número 2"
        name="numero2"
        value={numeros.numero2}
        handleChange={handleChange}
      />
      <div className="resultados">
        <Resultado operacion="Suma" calculo={suma()} />
        <Resultado operacion="Resta" calculo={resta()} />
        <Resultado operacion="Multiplicación" calculo={multiplicacion()} />
        <Resultado operacion="División" calculo={division()} />
      </div>
    </div>
  );
};

export default Calculadora;
