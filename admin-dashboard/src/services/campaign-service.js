import { client} from '../utils/api-client'
const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const CampaignService =  {

  getCampaign: async () => {
    try {
      const url = `${serverUrl}/campaign`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Cannot login");
      return response
    } catch (e) {
      throw e
    }
  },

  addCampaign: async (data) => {
    console.log('data Csmpaign -------------------', data)
    try {
      const url = `${serverUrl}/campaign`
      const method = 'POST'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Create Campaign");
      return response
    } catch (e) {
      throw e
    }
  },

  updateCampaign: async (data) => {
    try {
      const url = `${serverUrl}/campaign`
      const method = 'PUT'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Update Campaign");
      return response
    } catch (e) {
      throw e
    }
  },

  deleteCampaign: async (data) => {
    try {
      const url = `${serverUrl}/campaign`
      const method = 'DELETE'
      const response = await client(url, method, { ...data });
      if (!response)
        throw new Error("Cannot Delete Campaign");
      return response
    } catch (e) {
      throw e
    }
  }
}