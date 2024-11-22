import React, { useState } from 'react';
import '../styles/CurrencyConverter.css';

function CurrencyConverter() {
  const [amountCOP, setAmountCOP] = useState('');
  const [conversionRate, setConversionRate] = useState(4100);
  const [convertedUSD, setConvertedUSD] = useState(0);

  const handleConvert = () => {
    setConvertedUSD(amountCOP / conversionRate);
  };

  return (
    <section className='Convertidor'>
      <h2>Convertidor COP a USD</h2>
      <div className='input-div'>
        <input
          type="number"
          placeholder="Cantidad en COP"
          value={amountCOP}
          onChange={(e) => setAmountCOP(e.target.value)}
        />
        <button onClick={handleConvert}>Convertir</button>
      </div>
      <p>Resultado: ${convertedUSD.toFixed(2)} USD</p>
    </section>
  );
}

export default CurrencyConverter;
