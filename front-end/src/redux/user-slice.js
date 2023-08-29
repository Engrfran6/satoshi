import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: undefined,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.user.token = action.payload;
    },
    clearToken: (state) => {
      state = null;
      return state;
    },
    resetUser(state) {
      state.user = undefined;
      localStorage.setItem('persist:root', '');
    },

    setInvestments(state, action) {
      state.user.investments = action.payload;
    },
    setSelectedPackage(state, action) {
      state.user.selectedPackage = action.payload;
    },
    setSelectedPaymentOption(state, action) {
      state.user.selectedPaymentOption = action.payload;
    },
    setInvestAmount(state, action) {
      state.user.investAmount = action.payload;
    },
    setSelectedDepositAmount(state, action) {
      state.user.selectedDepositAmount = action.payload;
    },
  },
});

export const {
  resetUser,
  clearToken,
  setUser,
  setToken,
  setInvestments,
  setSelectedPackage,
  setSelectedPaymentOption,
  setInvestAmount,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
