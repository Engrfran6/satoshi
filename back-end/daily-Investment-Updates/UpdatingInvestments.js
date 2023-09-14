const Investment = require('../models/Investment/InvestmentModel');

const updateInvestments = async () => {
  console.log('Updating investments...');
  try {
    // Retrieve all investments records
    const investments = await Investment.find({});

    console.log('investments', investments);

    // Loop through each user and update dailyRoi
    for (const investment of investments) {
      const randomDailyProfit = Math.floor(Math.random() * 20) + 1;
      // const randomDailyLoss = Math.floor(Math.random() * 20) + 1;
      // const randomNetProfit = Math.floor(Math.random() * 10) + 1;
      // const randomTotalReturn = Math.floor(Math.random() * 30) + 1;
      // const randomMonthlyProfit = Math.floor(Math.random() * 840) + 1;
      // const randomMonthlyLoss = Math.floor(Math.random() * 70) + 1;
      // const randomReferalBonus = Math.floor(Math.random() * 10) + 1;
      // const randomRewards = Math.floor(Math.random() * 11) + 1;

      // Update the investment properties
      investment.dailyProfit += randomDailyProfit;
      // investment.dailyLoss += randomDailyLoss;
      // investment.netProfit += randomNetProfit;
      // investment.totalReturn += randomTotalReturn;
      // investment.monthlyProfit += randomMonthlyProfit;
      // investment.monthlyLoss += randomMonthlyLoss;
      // investment.referalBonus += randomReferalBonus;
      // investment.rewards += randomRewards;

      // Save the updated investment record
      await investment.save();

      console.log('investment saved');
    }
  } catch (error) {
    console.error('Error updating investments:', error);
  }
};

updateInvestments();

// const now = new Date();
// const nextTenPM = new Date(now);
// nextTenPM.setHours(22, 0, 0, 0); // Set to 10 PM
// const millisecondsUntilTenPM = nextTenPM - now;

// // Schedule the update to run daily at 10 PM
// const dailyUpdateInterval = 24 * 60 * 60 * 1000; // 24 hours
// console.log('time', dailyUpdateInterval);

// setTimeout(() => {
//   // Initial update (run once after the specified delay)
//   updateInvestments();
//   // Set up the interval for daily updates
//   setInterval(updateInvestments, dailyUpdateInterval);
// }, millisecondsUntilTenPM);
