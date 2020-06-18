import { Component, OnInit } from '@angular/core';

import { fabric } from 'fabric';
import { ImageService } from '../core/image.service';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss']
})
export class FabricComponent implements OnInit {

  images = [];
  imagesObjs: any = [];
  canvas: any;
  selectedImage = false;
  selectedObj: any = false;
  light = 0;
  shadow = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit() {

    this.images = this.imageService.getImagesPath();

    this.images.forEach((value, key) => {
      this.imagesObjs[key] = new Image();
      this.imagesObjs[key].src = value;
    });


    this.canvas = new fabric.Canvas('canvas', {
      backgroundColor: 'rgb(100,100,200)',
    });

    // var rect = new fabric.Rect({
    //     top : 100,
    //     left : 100,
    //     width : 60,
    //     height : 70,
    //     fill : 'red'
    // });

    // var rect1 = new fabric.Rect({
    //     top : 200,
    //     left : 200,
    //     width : 60,
    //     height : 70,
    //     fill : 'green'
    // });

    // canvas.add(rect, rect1);

  }

  addImage(imageObj, i) {
    console.log(i);
    const img = new fabric.Image(imageObj, {});
    img.scaleToWidth(500);
    img.scaleToHeight(400);

    console.log(imageObj);
    // if (i === 0 ) { // Product
    //   img.globalCompositeOperation = 'source-in';
    // } else if (i === 1) { // Cutout
    //   // img.globalCompositeOperation="source-atop"
    // } else if (i === 2) { // Pattern
    //   img.globalCompositeOperation = 'destination-out';
    // }

    if (i === 2) {
      this.canvas = this.canvas.clear();
      const newImgArr = [this.imagesObjs[1], this.imagesObjs[2], this.imagesObjs[0]];
      console.log(newImgArr);
      newImgArr.forEach((imgObj, j) => {
        const canImg = new fabric.Image(imgObj, {});
        canImg.scaleToWidth(500);
        canImg.scaleToHeight(400);
        if (j === 0) { // Product
        } else if (j === 1) { // Cutout
          canImg.globalCompositeOperation = 'source-in';
          // canImg.globalCompositeOperation = 'source-atop';
        } else if (j === 2) { // Pattern
          canImg.globalCompositeOperation = 'destination-atop';
        }
        this.canvas.add(canImg);
      });
    } else {
      this.canvas.add(img);
      // console.log(this.canvas);
      // this.canvas.clear();
      // console.log(this.canvas);
    }


    // this.productImages.push(imageObj)
    // const image = this.kovaImg.image(imageObj);

    // this.layer.add(image);

    // this.allCanvasObjs.push(image);

    // this.tr.nodes([image])
    // this.layer.draw();

    // var customThis = this;
    // customThis.selectedObj = image;
    // image.on('click', function() {
    //   customThis.tr.nodes([image]);
    //   customThis.selectedObj = image;
    // });

    // this.layer.add(this.tr);
    // this.layer.draw();
    // this.stage.add(this.layer);

  }

  selectImage(event, i) {
    const componentThis = this;
    // let newImageObj = new Image();
    // newImageObj.onload = function () {
    //   componentThis.addImage(newImageObj);
    // };
    // newImageObj.src = imgSrc;
    componentThis.addImage(componentThis.imagesObjs[i], i);

  }


}
