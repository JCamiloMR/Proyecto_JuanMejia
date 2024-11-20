import React, { useState } from 'react';
import '../styles/CurrencyConverter.css';

function CurrencyConverter() {
  const [amountCOP, setAmountCOP] = useState('');
  const [conversionRate, setConversionRate] = useState(4100); // Tasa de ejemplo: 1 USD = 4100 COP
  const [convertedUSD, setConvertedUSD] = useState(0);

  const handleConvert = () => {
    setConvertedUSD(amountCOP / conversionRate);
  };

  return (
    <section className="currency-converter">
      <h2>Convertidor COP a USD</h2>
      <div className="converter-form">
        <input
          type="number"
          placeholder="Cantidad en COP"
          value={amountCOP}
          onChange={(e) => setAmountCOP(e.target.value)}
        />
        <button onClick={handleConvert}>Convertir</button>
      </div>
      <p className="result">
        Resultado: ${convertedUSD.toFixed(2)} USD
      </p>
      <p className="rate-info">Tasa de cambio actual: 1 USD = {conversionRate} COP</p>
    </section>
  );
}

export default CurrencyConverter;
