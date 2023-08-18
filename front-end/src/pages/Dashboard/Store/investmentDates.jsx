export const calculateEndDate = (startDate, investmentPeriod) => {
  if (startDate && investmentPeriod) {
    const start = new Date(startDate);
    const periodInDays = parseInt(investmentPeriod, 10);

    // Calculate the end date by adding the investment period to the start date
    const endDateInMilliseconds = start.getTime() + periodInDays * 24 * 60 * 60 * 1000;
    const endDateObj = new Date(endDateInMilliseconds);
    const endDate = endDateObj.toISOString().split('T')[0]; // Convert to YYYY-MM-DD format

    return endDate;
  }
};
