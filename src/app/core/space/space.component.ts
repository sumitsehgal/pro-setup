import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { fabric } from "fabric";

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {

  images = [];
  imagesObjs: any = [];
  canvas: any;
  selectedImage: boolean = false;
  selectedObj: any = false;
  light: number = 0;
  shadow: number = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit() {

    this.images = this.imageService.getImagesPath("space");

    this.images.forEach((value, key)=>{
      this.imagesObjs[key] = new Image();
      this.imagesObjs[key].src = value;
    })

  
    this.canvas = new fabric.Canvas('canvas',{
      backgroundColor: 'rgb(100,100,200)',
    });
  
  }

  saveToJson() {
    console.log(this.canvas.toJSON());
  }


  addImage(imageObj, i) {
    console.log(i);
    const img = new fabric.Image(imageObj, {});
    img.scaleToWidth(500);
    img.scaleToHeight(400);
    console.log(imageObj);
    this.canvas.add(img);
    // if (i === 2) {
    //   this.canvas = this.canvas.clear();
    //   const newImgArr = [this.imagesObjs[1], this.imagesObjs[2], this.imagesObjs[0]];
    //   console.log(newImgArr);
    //   newImgArr.forEach((imgObj, j) => {
    //     const canImg = new fabric.Image(imgObj, {});
    //     canImg.scaleToWidth(500);
    //     canImg.scaleToHeight(400);
    //     if (j === 0) { // Product
    //     } else if (j === 1) { // Cutout
    //       canImg.globalCompositeOperation = 'source-in';
    //       // canImg.globalCompositeOperation = 'source-atop';
    //     } else if (j === 2) { // Pattern
    //       canImg.globalCompositeOperation = 'destination-atop';
    //     }
    //     this.canvas.add(canImg);
    //   });
    // } else {
    //   this.canvas.add(img);
    //   // console.log(this.canvas);
    //   // this.canvas.clear();
    //   // console.log(this.canvas);
    // }
}

  selectImage(event, i) {
    let componentThis = this;
    // let newImageObj = new Image();
    // newImageObj.onload = function () {
    //   componentThis.addImage(newImageObj);
    // };
    // newImageObj.src = imgSrc;
    componentThis.addImage(componentThis.imagesObjs[i], i);
    
  }

}
