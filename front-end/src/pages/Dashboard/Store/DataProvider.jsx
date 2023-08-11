import { createContext, useState } from 'react';
import { useFetch } from './useFetch';

export const DataContext = createContext();

export const DataProvider = ({children}) => { 
  const userId = 4
  const url = `http://localhost:5000/data/${userId}`
  const { data, loading, error, logout } = useFetch(url);


  console.log(data)


    const sumArray =loading ? []: (arrayOfData, index)=>{
    let sumOfArrayOfAmount = 0// the sum is initialed to 0
    for(let i = 0; i < arrayOfData.length; i += 1) {
       sumOfArrayOfAmount += (arrayOfData[i][index])
    }
    return sumOfArrayOfAmount
  }

    const sumArray2 = loading ? []: (arrayOfData2)=>  {
    let sumOfArrayOfAmount2 = 0// the sum is initialed to 0
    for(let i = 0; i < arrayOfData2.length; i += 1) {
       sumOfArrayOfAmount2 += (arrayOfData2[i])
    }
    return sumOfArrayOfAmount2
  }


    const balance = (data.balance)
    const totalInvested =loading ? []:  ((sumArray(data.activeInvestments, 'amountInvested')) + (sumArray(data.expiredInvestments, 'amountInvested')))
    const totalBalance = loading ? []: ((data.balance) + (sumArray(data.activeInvestments, 'amountInvested')))
    const totalProfits =loading ? []:  ((sumArray(data.activeInvestments,"dailyReturns")) + (data.rewards + data.referrals) + (sumArray(data.expiredInvestments, 'dailyReturns')))
    const currentInventedFunds =loading ? []:  (sumArray(data.activeInvestments, "amountInvested"))

    const thisMonthProfit =loading ? []:  sumArray(data.activeInvestments, 'dailyReturns')
    const rewards = (data.rewards)
    const referrals = (data.referrals)
    const totalMonthlyProfits =loading ? []:  ((sumArray(data.activeInvestments, 'dailyReturns')) + (data.rewards) + (data.referrals))
    
    const totalNumberOfInvestments =loading ? []:  (data.activeInvestments).length + (data.expiredInvestments).length

    const dailyReturns =loading ? []:  (sumArray(data.activeInvestments, "dailyReturns"))
   
    const lastestInvestments =loading ? []:  data.activeInvestments.slice(-1)
    
    const numberOfActiveInvestments =loading ? []:  data.activeInvestments.length > 0 ? data.activeInvestments.length : "0";
    const numberOfexpiredInvestments =loading ? []:  data.expiredInvestments.length > 0 ? data.expiredInvestments.length : "0";
    
    const activeInvestments = data.activeInvestments
    const expiredInvestments = data.expiredInvestments

    const myInvestments = []
   loading ? []: myInvestments.push(...activeInvestments, ...expiredInvestments)

    
    const customerName =loading ? []:  data.user.name
    const customerEmail =loading ? []:  data.user.email
    const customerStatus =loading ? []:  data.user.isVerified
    const referralsId =loading ? []:  data.referralId
    const inviteLink =loading ? []: `https://satochitradepro.com/?ref=${referralsId}`
    
    
    const percentIncrease =loading ? []:  ((sumArray(data.activeInvestments, 'amountInvested') / (sumArray(data.activeInvestments, 'profitRate')))/ 1000)
    const percentDecrease =loading ? []:  ((sumArray(data.activeInvestments, 'amountInvested') / (sumArray(data.activeInvestments, 'lossRate')))/ 1000)

    const packageDetails =loading ? []:  data.packageDetails
    
    const calculateEndDate = (startDate, investmentPeriod) => {
      if (startDate && investmentPeriod) {
        const start = new Date(startDate);
        const periodInDays = parseInt(investmentPeriod, 10);
        
        // Calculate the end date by adding the investment period to the start date
        const endDateInMilliseconds = start.getTime() + periodInDays * 24 * 60 * 60 * 1000;
        const endDateObj = new Date(endDateInMilliseconds);
        const endDate = (endDateObj.toISOString().split('T')[0]); // Convert to YYYY-MM-DD format

        return endDate
      }
    };



  return (
    <DataContext.Provider value = {{
      customerName,
      customerEmail, 
      customerStatus, 
      balance, 
      rewards, 
      referrals, 
      inviteLink, 
      totalInvested,
      totalBalance,
      totalProfits,
      dailyReturns,
      thisMonthProfit,
      totalMonthlyProfits,
      totalNumberOfInvestments,
      lastestInvestments,
      numberOfActiveInvestments,
      numberOfexpiredInvestments,
      currentInventedFunds,
      myInvestments,
      activeInvestments,
      expiredInvestments,
      percentIncrease,
      percentDecrease,
      referralsId,
      calculateEndDate,
      packageDetails,

      error, 
      loading,
      logout
      }}>
      
      {children}
    </DataContext.Provider>
  );
};

