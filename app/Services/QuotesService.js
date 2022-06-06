import { ProxyState } from "../AppState.js";
import { quotesApi } from "./ApisService.js";


class QuotesService {

  async getQuotes() {
    const res = await quotesApi.get()
    // console.log('get quotes', res.data);
    ProxyState.quote = res.data
  }
}


export const quotesService = new QuotesService()