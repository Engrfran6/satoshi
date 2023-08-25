import { client} from '../utils/api-client'
const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const stakeService =  {

  getStakes: async () => {
    try {
      const url = `${serverUrl}/stake`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Cannot login");
      return response
    } catch (e) {
      throw e
    }
  },
}