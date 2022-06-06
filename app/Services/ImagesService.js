import { ProxyState } from "../AppState.js";
import { imagesApi } from "./ApisService.js";


class ImagesService {

  async getImage() {
    const res = await imagesApi.get()
    // console.log('get images', res.data);
    ProxyState.image = res.data
  }
}

export const imagesService = new ImagesService()