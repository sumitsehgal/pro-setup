import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ImageModel } from '../image.model';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

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

  images2 = [
    {
      type: 'product',
      url: 'assets/images/product2/product.png',
      coords: null,
      size: null,
    },
    {
      type: 'slice 1',
      url: 'assets/images/product2/slice-1.png',
      coords: null,
      size: null,
    },
    {
      type: 'slice 2',
      url: 'assets/images/product2/slice-2.png',
      coords: null,
      size: null,
    },
    {
      type: 'wall 1',
      url: 'assets/images/pattern.jpg',
      coords: null,
      size: null,
    },
    {
      type: 'wall 2',
      url: 'assets/images/pattern1.jpg',
      coords: null,
      size: null,
    },
  ];

  baseImages: any;

  imagesChanged = new Subject<ImageModel[]>();

  constructor() { }

  getImagesPath() {
    return this.images;
  }

  getImagesPath2() {
    return this.images2;
  }

  getImages() {
    // If need to convert to base64

    const newImages = this.images.map((imgUrl) => {
     return this.convertToBase64(imgUrl);
    });

    return newImages;

  }

  async convertToBase64(imgUrl: string) {
    const promise = new Promise((resolve, reject) => {
      this.toDataUrl(imgUrl, (myBase64) => {
        resolve(myBase64);
      });
    });
    return await promise;

  }

  toDataUrl(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        const reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        };
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
