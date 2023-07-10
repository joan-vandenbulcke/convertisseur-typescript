export type DeviseType = {
  name: string;
  code: string;
  symbol: string;
  rate: number;
};

const dollar: DeviseType = {
  name: "Dollar",
  code: "DOL",
  symbol: "$",
  rate: 1,
};

const euro: DeviseType = {
  name: "Euro",
  code: "EUR",
  symbol: "€",
  rate: 0.91,
};

const pound: DeviseType = {
  name: "Pound",
  code: "PND",
  symbol: "£",
  rate: 0.78,
};

const yen: DeviseType = {
  name: "Yen",
  code: "YEN",
  symbol: "¥",
  rate: 141.52,
};

const franc: DeviseType = {
  name: "Franc Suisse",
  code: "CHF",
  symbol: "CHF",
  rate: 0.89,
};

export const currencies: DeviseType[] = [dollar, euro, pound, yen, franc];
