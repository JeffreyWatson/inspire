import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

function _drawImage() {
  let image = ProxyState.image
  document.body.style.backgroundImage = `url(${image.largeImgUrl})`;
}

export class ImagesController {
  constructor() {
    // console.log('controller');
    ProxyState.on('image', _drawImage)
    this.getImage()
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, 'error')
    }
  }

}