import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageModel } from '../image.model';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  jsonData: any;

  spaceImages = [
    'assets/images/product.jpg',
    'assets/images/wall-1-layer.png',
    'assets/images/wall-2-layer.png',
    'assets/images/wall-2-shadow.png'
  ]

  images = [
    'assets/images/grand-orinoco.png',
    'assets/images/slice1.png',
    // 'assets/images/crop1.png',
    'assets/images/sp2.jpg',
    'assets/images/sp3.jpg',
    // 'assets/images/p1.jpg',
    // 'assets/images/p2.jpg',
    // 'assets/images/p3.jpg',
    // 'assets/images/p4.jpg',
    // 'assets/images/shadow-100.png',
  ];
  baseImages: any;

  imagesChanged = new Subject<ImageModel[]>()

  constructor() { }

  setJson(jsonval) {
    this.jsonData = jsonval;
  }

  getJason() {
    return this.jsonData;
  }

  getImagesPath(imgType = "normal") {
    if(imgType == "space") {
      return this.spaceImages;
    }

    return this.images;
  }

  getImages() {
    // If need to convert to base64

    let newImages = this.images.map((imgUrl)=>{
     return this.convertToBase64(imgUrl)
    });
    
    return newImages;

  }

  async convertToBase64(imgUrl: string) {
    let promise = new Promise((resolve, reject)=>{
      this.toDataUrl(imgUrl, (myBase64)=>{
        resolve(myBase64);
      })
    })
    return await promise;
      
  }

  toDataUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

/*  jimpObject(image:ImageModel)  {
    if(image.originalbase64code) {
      if(image.originalbase64code.indexOf('base64') != -1) {

        if(image.originalbase64code.indexOf('png') != -1){
          return jimp.read(Buffer.from(image.originalbase64code.replace(/^data:image\/png;base64,/, ""), 'base64'))
        }else if(image.base64code.indexOf('jpeg') != -1) {
          return jimp.read(Buffer.from(image.originalbase64code.replace(/^data:image\/jpeg;base64,/, ""), 'base64'))
        }
      }
    }
  }
*/
}
