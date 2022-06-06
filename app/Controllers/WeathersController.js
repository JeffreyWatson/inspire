import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";


function _drawWeather() {
  let weather = ProxyState.weather
  weather.main.temp = Math.round((weather.main.temp - 273.15) * 1.8 + 32)
  document.getElementById('weather').innerHTML = `${weather.main.temp + '℉' + ' ' + weather.name} `
}

export class WeathersController {
  constructor() {
    // console.log('weather controller');
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
  }

  async getWeather() {
    try {
      await weathersService.getWeather()
    } catch (error) {
      console.error('error')
      Pop.toast(error.message, 'error')
    }
  }
}