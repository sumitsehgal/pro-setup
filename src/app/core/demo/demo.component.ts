import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
import { ImageService } from '../image.service';
import { KovaImageService } from 'src/app/kova-image.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  images = [];
  imagesObjs = [];
  shapes: any = [];
  stage: Konva.Stage;
  layer: Konva.Layer;
  tr: Konva.Transformer;
  allCanvasObjs = [];
  selectedImage = false;
  selectedObj: any = false;
  light = 0;
  shadow = 0;
  productImages = [];


  constructor(private imageService: ImageService, private kovaImg: KovaImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImagesPath();

    this.images.forEach((value, key) => {
      this.imagesObjs[key] = new Image();
      this.imagesObjs[key].src = value;
    });

    const width = 500;
    const height = 400;
    this.stage = new Konva.Stage({
      container: 'sketch-holder',
      width,
      height
    });
    this.layer = new Konva.Layer();
    this.stage.add(this.layer);

    this.tr = new Konva.Transformer({
      nodes: [],
      anchorFill: '#353535',
    });

  }

  addImage(imageObj) {
    this.productImages.push(imageObj);
    const image = this.kovaImg.image(imageObj);

    this.layer.add(image);

    this.allCanvasObjs.push(image);

    this.tr.nodes([image]);
    this.layer.draw();

    const customThis = this;
    customThis.selectedObj = image;
    image.on('click', function() {
      customThis.tr.nodes([image]);
      customThis.selectedObj = image;
    });

    this.layer.add(this.tr);
    this.layer.draw();
    this.stage.add(this.layer);

  }

  selectImage(event, i) {
    const componentThis = this;
    // let newImageObj = new Image();
    // newImageObj.onload = function () {
    //   componentThis.addImage(newImageObj);
    // };
    // newImageObj.src = imgSrc;
    componentThis.addImage(componentThis.imagesObjs[i]);

  }

  onSliderChange() {
    if (this.selectedObj) {
      const opacityVal = 1 - ((this.light) / 100);
      this.selectedObj.opacity(opacityVal);
      // let shadowVal =-(this.shadow) / 100;
      // this.selectedObj.filters([Konva.Filters.Brighten]);
      // this.selectedObj.brightness(shadowVal)

      this.layer.draw();
    }
  }


  setCutouts() {
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');

    const x = 500 / 2 - 500 / 2;
    const y = 400 / 2 - 400 / 2;
    ctx.clearRect(x, y, 500, 400);
    if (this.productImages[1] !== undefined) {
      ctx.drawImage(this.productImages[1], x, y, 500, 400); // Cutout Image
      ctx.globalCompositeOperation = 'source-in';
    }


    // ctx.fillStyle="Red";
    // ctx.fillRect(0,0,canvas.width,canvas.height);
    if (this.productImages.length > 0) {
      ctx.drawImage(this.productImages[this.productImages.length - 1], x, y, 500, 400);  // Pattern Image
    }

    if (this.productImages[0] !== undefined) {
      ctx.globalCompositeOperation = 'destination-atop';
      ctx.drawImage(this.productImages[0], x, y, 500, 400); // Product Image
    }

    //    ctx.restore();

  }


}
