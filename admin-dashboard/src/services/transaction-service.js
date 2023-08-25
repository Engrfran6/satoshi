import { client} from '../utils/api-client'
const serverUrl = process.env.REACT_APP_API_BASE_URL;

export const transactionService =  {

  getTransactions: async () => {
    try {
      const url = `${serverUrl}/transaction?page=0&limit=20`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Error Getting Transactions");
      return response
    } catch (e) {
      throw e
    }
  },

  getMoreData: async (limit, page, path) => {
    try {
      const url = `${serverUrl}/${path}?page=${page}&limit=${limit}`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Error Getting Transactions");
      return response
    } catch (e) {
      throw e
    }
  },

  getDataByDate: async (dates,  model, select) => {
    const { startDate, endDate } = dates
    const reQuery = `?gte=${startDate}&lte=${endDate}&limit=1000000&field=createdAt&select=${select}`
    try {
      const url = `${serverUrl}/${model}/get/more/${reQuery}`
      const method = 'GET'
      const response = await client(url, method);
      if (!response)
        throw new Error("Error Getting Data ..");
      return response
    } catch (e) {
      throw e
    }
  }
}
