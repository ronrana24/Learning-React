import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency: string) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      const responseData = await response.json();
      setData(responseData[currency]);
    };

    fetchData();
  }, [currency]);

  return data;
}

// &from=${from}&to=${to}&amount=${amount}
