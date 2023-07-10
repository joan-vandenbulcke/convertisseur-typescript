import { DeviseType } from "./CurrencyData";

export function calculateResult(
  amount: number | undefined,
  initialCurrency: string,
  convertCurrency: string,
  currencies: DeviseType[]
): number | undefined {
  const initialCurrencyObj: DeviseType | undefined = currencies.find(
    (currency) => currency.code === initialCurrency
  );
  const convertCurrencyObj: DeviseType | undefined = currencies.find(
    (currency) => currency.code === convertCurrency
  );

  if (amount && initialCurrencyObj && convertCurrencyObj) {
    return amount * (convertCurrencyObj.rate / initialCurrencyObj.rate);
  }

  return undefined;
}
