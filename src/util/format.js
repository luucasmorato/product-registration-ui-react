//formats value for currency
export const { format: formatValue } = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
