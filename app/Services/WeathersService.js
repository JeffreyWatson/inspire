import { ProxyState } from "../AppState.js";
import { weatherApi } from "./ApisService.js"


class WeathersService {

  async getWeather() {
    const res = await weatherApi.get()
    // console.log('get weather', res.data);
    ProxyState.weather = res.data
  }
}

export const weathersService = new WeathersService()