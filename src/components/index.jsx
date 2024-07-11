import React, { useState } from "react";

import IMC from "../style/TabelaIMC.png";

const IMCCalculator = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);

  const calcularIMC = (peso, altura) => {
    const alturaEmMetros = altura / 100;
    const imc = peso / (alturaEmMetros * alturaEmMetros);
    return imc.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const imcCalculado = calcularIMC(peso, altura);
    setImc(imcCalculado);
  };
  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={handleSubmit}>
        <div className="teste">
          <div>
            <div>
              <label>
                Peso:
                <input
                  onChange={(e) => setPeso(e.target.value)}
                  value={peso}
                  type="number"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Altura em centimetros:
                <input
                  onChange={(e) => setAltura(e.target.value)}
                  value={altura}
                  type="number"
                  required
                />
              </label>
            </div>
          </div>
          <button type="submit">+</button>
        </div>
      </form>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <p className="imc">
            {imc < 18.5
              ? "Abaixo do peso"
              : imc < 24.9
              ? "Peso normal"
              : imc < 29.9
              ? "Sobrepeso"
              : imc < 34.9
              ? "Obesidade grau I"
              : imc < 39.9
              ? "Obesidade grau II"
              : "Obesidade grau III"}
          </p>
          <img className="imc-img" src={IMC} alt="Tabela IMC" />
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
