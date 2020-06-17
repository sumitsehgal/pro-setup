import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ImageModel } from 'src/app/image.model';
import * as p5 from 'p5';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  images = [];
  selectedImage:ImageModel;
  selectedJimpObj;  
  lighting: number = 0;
  shadow: number = 0;
  contrast: number = 0;

  canvas: any;
  sw = 2;
  c = [];
  strokeColor = 0;
  imageObjects = [];
  imageObjectsOnCanvas = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    // Get the Images From Server in Base64 Format
     this.images = this.imageService.getImagesPath();

    let sImg = [];
    let allImgs = this.images;
    let sim;

    const sketch = s => {
      s.preload = () => {
        for(let i=0; i< allImgs.length; i++ ) {
          sImg[i] = s.loadImage(allImgs[i]);
        }
        
      };

      s.setup = () => {
        let canvas2 = s.createCanvas(400, 400);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        s.background(70);
        s.strokeWeight(this.sw);
        // s.createP("My Fav");
        this.imageObjects = s.selectAll(".image-child");
        
        for(let i=0; i< this.imageObjects.length; i++) {
          this.imageObjects[i].doubleClicked(s.onSelectImage.bind(this.imageObjects[i], this.imageObjects[i], i));
        }

      };

      s.onSelectImage = (t, index) => {

          
        // let im = s.select('#image'+index);
        let im = sImg[index];
        s.image(im, s.random(0,200)/2, s.random(0,200)/2, im.width/2, im.height/2 );
        
        // im.mouseClicked(s.highlightImg);
        // this.imageObjectsOnCanvas[index] = im;
  
        // this.imageObjectsOnCanvas[index].mousePressed(s.highlightSelectedObj.bind(this.imageObjectsOnCanvas[index], this.imageObjectsOnCanvas[index], index))
      };
      s.imageObjectsOnCanvas = ()  => {

        console.log("Selected");

      };

      s.draw = () => {
        
      };

      s.mouseReleased = () => {
        
      };

      s.keyPressed = () => {
        
      };
    };

    this.canvas = new p5(sketch);


  }


  onImgSelect(image: ImageModel) {
    this.images.forEach((img)=>{
      img.selected = false;
    })
    image.selected = true;

    this.selectedImage = image;

  }




}
