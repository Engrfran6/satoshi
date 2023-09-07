import {client} from '../utils/api-client';

const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const packageService = {
  getPackages: async () => {
    try {
      const url = `${serverUrl}/packages/?limit=50`;
      const method = 'GET';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
  CreatePackages: async (reqbody) => {
    try {
      const url = `${serverUrl}/package/create`;
      const method = 'POST';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  updatePackages: async (packageId, reqbody) => {
    try {
      const url = `${serverUrl}/auth/package/${packageId}`;
      const method = 'PATCH';
      const response = await client(url, method, {...reqbody});
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },

  deletePackage: async (packageId) => {
    try {
      const url = `${serverUrl}/auth/package/${packageId}`;
      const method = 'DELETE';
      const response = await client(url, method);
      if (!response) throw new Error('Not Authorized');
      return response;
    } catch (e) {
      throw e;
    }
  },
};
