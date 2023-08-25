export const formatAmount = (amount) => {
  amount = amount.toFixed(2);
  return "₦ " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}