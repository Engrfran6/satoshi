import {client} from '../utils/api-client';

const serverUrl = import.meta.env.VITE_API_BASE_URL;

export const userAccountService = {
  getBanks: async () => {
    try {
      const url = `${serverUrl}/bank`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  getAdminBanks: async () => {
    try {
      const url = `${serverUrl}/adminbanks`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  getAdminBtcs: async () => {
    try {
      const url = `${serverUrl}/adminbtcs`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  getAdminUsdts: async () => {
    try {
      const url = `${serverUrl}/adminusdts`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  CreateBanks: async (reqbody) => {
    try {
      const url = `${serverUrl}/bank/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateBanks: async (userId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/bank/${userId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deleteBanks: async (userId) => {
    try {
      const url = `${serverUrl}/auth/bank/${userId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  // ============================================================
  getBtcs: async () => {
    try {
      const url = `${serverUrl}/auth/btcs`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  CreateBtcs: async (reqbody) => {
    try {
      const url = `${serverUrl}/btc/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateBtcs: async (userId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/btc/${userId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deleteBtcs: async (userId) => {
    try {
      const url = `${serverUrl}/auth/btc/${userId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  // ================================================================
  getUsdts: async () => {
    try {
      const url = `${serverUrl}/auth/usdts`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  CreateUsdts: async (reqbody) => {
    try {
      const url = `${serverUrl}/usdt/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updateUsdts: async (userId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/usdt/${userId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deleteUsdts: async (userId) => {
    try {
      const url = `${serverUrl}/auth/usdt/${userId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
