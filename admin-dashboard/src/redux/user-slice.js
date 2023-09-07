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

    setUserList(state, action) {
      state.userList = action.payload;
    },
    setPackageList(state, action) {
      state.packageList = action.payload;
    },
    setUsersId(state, action) {
      state.usersId = action.payload;
    },
    setBankList(state, action) {
      state.bankList = action.payload;
    },
    setBtcList(state, action) {
      state.btcList = action.payload;
    },
    setUsdtList(state, action) {
      state.usdtList = action.payload;
    },
    setWithdrawalList(state, action) {
      state.withdrawalList = action.payload;
    },
    setDeposittList(state, action) {
      state.depositList = action.payload;
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
  },
});

export const getFullNameById = (state, userId) => {
  const user = state.userList.find((user) => user._id === userId);
  return user ? user.fullName : null;
};

export const {
  resetUser,
  clearToken,
  setUser,
  setToken,
  setUserList,
  setPackageList,
  setUsersId,
  setBankList,
  setBtcList,
  setUsdtList,
  setWithdrawalList,
  setDeposittList,
} = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
