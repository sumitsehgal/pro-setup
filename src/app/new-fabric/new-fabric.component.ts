import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

import { ImageService } from '../core/image.service';

@Component({
  selector: 'app-new-fabric',
  templateUrl: './new-fabric.component.html',
  styleUrls: ['./new-fabric.component.scss']
})
export class NewFabricComponent implements OnInit {

  images = [];
  imagesObjs: any[] = [];
  canvas: any;
  selectedImage = false;
  selectedObj: any = false;
  light = 0;
  shadow = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit() {

    this.images = this.imageService.getImagesPath2();

    this.images.forEach((value, key) => {
      const img = new Image();
      img.src = value.url;
      img.setAttribute('id', value.type);
      this.imagesObjs.push(img);
    });

    this.canvas = new fabric.Canvas('canvas', {
      backgroundColor: 'rgb(100,100,200)',
    });
  }

  addImage(imageObj, i) {
    console.log(i);
    const img = new fabric.Image(imageObj, {});
    img.scaleToWidth(500);
    img.scaleToHeight(400);
    this.canvas.add(img);

  }

  selectImage(event, i) {
    const componentThis = this;
    componentThis.addImage(componentThis.imagesObjs[i], i);
  }

  merge() {
    const myObjs = [];
    this.canvas.forEachObject((obj) => {
      myObjs.push(obj);
    });
    this.canvas = this.canvas.clear();
    const newImgArr = [
      new fabric.Group(myObjs.filter(obj => obj._element.id === 'slice')),
      new fabric.Group(myObjs.filter(obj => obj._element.id === 'wall')),
      myObjs.find(obj => obj._element.id === 'product'),
      new fabric.Group(myObjs.filter(obj => obj._element.id === 'light' || obj._element.id === 'shadow')),
    ];
    newImgArr.forEach((imgObj, j) => {
      if (j === 0) { // merged cutout
        this.canvas.add(imgObj);
      } else if (j === 1) { // merged wallpaper
        imgObj.globalCompositeOperation = 'source-in';
        this.canvas.add(imgObj);
      } else if (j === 2) { // product
        imgObj.globalCompositeOperation = 'destination-atop';
        this.canvas.add(imgObj);
      } else if (j === 3) { // lights and shadows
        imgObj.globalCompositeOperation = 'source-over';
        this.canvas.add(imgObj);
      }
    });
  }

}
