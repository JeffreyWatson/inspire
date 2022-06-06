import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawQuote() {
  let quote = ProxyState.quote
  document.getElementById('quote').innerHTML = `${quote.content}`
  document.getElementById('quotea').innerHTML = `${quote.author}`
}

export class QuotesController {
  constructor() {
    ProxyState.on('quote', _drawQuote)
    this.getQuotes()
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, 'error')
    }
  }
}
