import {store} from '../../../redux/store';
import {sumArray} from '../Store/sumIndexArray';
let user = store?.getState()?.user?.user?.user || [];
export let investments = store?.getState()?.user?.user?.investments || [];
export let expiredInvestments = store?.getState()?.user?.user?.expiredInvestments || [];

export const username = user?.username;

export const balance = user?.balance;
export const totalInvested = investments ? sumArray(investments, 'invAmount') : [];

// export const totalProfits = investments ? sumArray(investments, 'dailyProfit') : [];

export let totalProfits = 0;

for (const profit of investments) {
  const personTotalProfit = profit.dailyProfit.reduce((sum, dailyProfit) => sum + dailyProfit, 0);
  totalProfits += personTotalProfit;
}

export const balanceInAccount =
  parseFloat(user?.balance) +
  sumArray(investments, 'invAmount') +
  parseFloat(sumArray(investments, 'dailyProfit'));

export const totalAvailableBalanceAndInv =
  parseFloat(user?.balance) + sumArray(investments, 'invAmount');

export const monthlyProfit = investments ? sumArray(investments, 'dailyProfit') : [];

export const referalBonus = user.referalBonus;
export const rewards = user.rewards;

export const Total = sumArray(investments, 'dailyProfit') + user.referalBonus + user.rewards;

export const totalActiveInv = investments.length ? investments.length : 0;
export const totalExpiredInv = expiredInvestments.length ? expiredInvestments.length : 0;
export const totalInv = totalActiveInv + totalExpiredInv;

export const inviteLink = `https://www.satochitradepro.com/${user?.referal}`;
