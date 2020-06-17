import { Injectable } from '@angular/core';
import Konva from 'konva';

@Injectable({
  providedIn: 'root'
})
export class KovaImageService {

  constructor() { 
    
  }

  image(imageObj) {

    var darthVaderImg = new Konva.Image({
      image: imageObj,
      x: 500 / 2 - 500 / 2,
      y: 400 / 2 - 400 / 2,
      width: 500,
      height: 400,
      draggable: true,
    });
    return darthVaderImg;

  }

}
