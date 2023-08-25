import { client} from '../utils/api-client'
const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const bundleService =  {

  getBundles: async () => {
    try {
      const url = `${serverUrl}/bundle`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Cannot login");
      return response
    } catch (e) {
      throw e
    }
  },

  addBundle: async (data) => {
    try {
      const url = `${serverUrl}/bundle`
      const method = 'POST'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Create bundle");
      return response
    } catch (e) {
      throw e
    }
  },

  updateBundle: async (data) => {
    try {
      const url = `${serverUrl}/bundle`
      const method = 'PUT'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Update bundle");
      return response
    } catch (e) {
      throw e
    }
  },

  deleteBundle: async (data) => {
    try {
      const url = `${serverUrl}/bundle`
      const method = 'DELETE'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Delete bundle");
      return response
    } catch (e) {
      throw e
    }
  }
}