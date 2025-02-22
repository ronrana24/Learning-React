import { FaExchangeAlt } from "react-icons/fa";
import "./style.css";
import { useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState<number>(0);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [amountCurrency, setAmountCurrency] = useState<string>("USD");
  const [convertedAmountCurrency, setConvertedAmountCurrency] =
    useState<string>("INR");

  const currencyData = useCurrencyInfo(amountCurrency.toLowerCase());
  const currencies = Object.keys(currencyData);

  const handleConversion = () => {
    setConvertedAmount(
      amount * currencyData[convertedAmountCurrency.toLowerCase()]
    );
  };

  const handleSwap = () => {
    setAmountCurrency(() => convertedAmountCurrency);
    setConvertedAmountCurrency(() => amountCurrency);
    setAmount(() => convertedAmount);
    setConvertedAmount(() => amount);
    setTimeout(handleConversion, 0);
  };

  return (
    <div>
      <div className="currency-converter">
        <div className="currency-card">
          {/* Input Amount Section */}
          <div className="currency-row">
            <div className="currency-label">Amount</div>
            <div className="currency-input">
              {/* <img src="/flags/sg.png" alt="SGD" className="currency-flag" /> */}
              <select
                className="currency-select"
                value={amountCurrency}
                onChange={(e) => setAmountCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency.toUpperCase()}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="amount-input"
                min={0}
              />
            </div>
          </div>

          {/* Exchange Icon */}
          <div className="exchange-icon" onClick={handleSwap}>
            <FaExchangeAlt />
          </div>

          {/* Converted Amount Section */}
          <div className="currency-row">
            <div className="currency-label">Converted Amount</div>
            <div className="currency-input">
              {/* <img src="/flags/us.png" alt="USD" className="currency-flag" /> */}
              <select
                className="currency-select"
                value={convertedAmountCurrency}
                onChange={(e) => setConvertedAmountCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency.toUpperCase()}>
                    {currency.toUpperCase()}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={convertedAmount}
                className="amount-input"
                disabled
              />
            </div>
          </div>
          <button className="convert-button" onClick={handleConversion}>
            Convert {`${amountCurrency} to ${convertedAmountCurrency}`}
          </button>
        </div>
      </div>
    </div>
  );
}
