export const Operaciones = (numeros, setNumeros) => {
  const { numero1, numero2 } = numeros;

  const handleChange = (e) => {
    const valor = parseFloat(e.target.value);
    setNumeros({
      ...numeros,
      [e.target.name]: isNaN(valor) ? 0 : valor
    });
  };

  const suma = () => numero1 + numero2;
  const resta = () => numero1 - numero2;
  const multiplicacion = () => numero1 * numero2;
  const division = () => numero2 !== 0 ? numero1 / numero2 : null;  

  return { handleChange, suma, resta, multiplicacion, division, numero1, numero2 };
};
