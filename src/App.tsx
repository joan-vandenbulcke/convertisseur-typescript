import { useState } from "react";
import "./App.scss";
import { currencies } from "./CurrencyData";
import { Select, Input } from "antd";
import { calculateResult } from "./Result";

const App = () => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [initialCurrency, setInitialCurrency] = useState<string>("DOL");
  const [convertCurrency, setConvertCurrency] = useState<string>("EUR");

  // Mapping currencies to display in Ant component
  const options = currencies.map((currency) => ({
    value: currency.code,
    label: `${currency.name} - (${currency.symbol})`,
  }));

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = event.target.value;
    setAmount(parseInt(amount));
    console.log("Montant saisi : ", amount);
  };

  const handleInitialCurrencyChange = (value: string) => {
    setInitialCurrency(value);
    console.log(value);
  };

  const handleConvertCurrencyChange = (value: string) => {
    setConvertCurrency(value);
    console.log(value);
  };

  const result = calculateResult(
    amount,
    initialCurrency,
    convertCurrency,
    currencies
  );

  return (
    <>
      <h1>Convertisseur de devises</h1>
      <h2>Réalisé en React + TypeScript</h2>
      <form action="submit">
        <div className="amount">
          <label htmlFor="amount__label">Montant :</label>
          <Input
            className="amount__input"
            min={0}
            type="number"
            placeholder="Saisissez un montant"
            size="large"
            onChange={handleAmountChange}
          />
        </div>
        <div className="currencies">
          <div className="currency">
            <label htmlFor="currency__input">Devise initiale :</label>
            <Select
              defaultValue="DOL"
              style={{ width: 150 }}
              onChange={handleInitialCurrencyChange}
              options={options}
              size="large"
            />
          </div>
          <div className="currency-to-convert">
            <label htmlFor="currency__input">Devise à convertir :</label>
            <Select
              defaultValue="EUR"
              style={{ width: 150 }}
              onChange={handleConvertCurrencyChange}
              options={options}
              size="large"
            />
          </div>
        </div>
      </form>
      <div className="result">Résultat : {result}</div>
    </>
  );
};

export default App;
