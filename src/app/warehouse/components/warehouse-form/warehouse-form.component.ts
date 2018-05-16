import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-warehouse-form',
  templateUrl: 'warehouse-form.component.html',
  styleUrls: ['warehouse-form.component.scss']
})

export class WareHouseFormComponent implements OnInit {

  public form: FormGroup;

  @ViewChild('fileInput') public fileInput;
  @ViewChild('canvas') public canvas;


  public myFiles = ['index.html'];

  // Allows us to get a reference to the FilePond instance
  @ViewChild('myPond') public myPond: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({});
  }
  onSubmit({ valid, value }: { valid: boolean, value: any }) {

  }

  public openFileInput() {
    this.fileInput.nativeElement.click();
  }

  public changeImage(): void {
    var file: File = this.fileInput.nativeElement.files[0];
    createImageBitmap(file).then((bitmap) => {
      const $preview = this.canvas;
      // const previewCtx = <ElementRef>$preview.getContext('2d').drawImage();
    })
  }

  public listenImage() {
    const file: File = this.fileInput.nativeElement.files[0];
    const context = this.canvas.getContext('2d');
    var image = new Image();
    image.onload = () => {
      // context.drawImage(this, 0, 0);
    };
    image.src = "";
  }

  public fleToBase64(input) {
    var reader = new FileReader();
    var ctx = this.canvas.getContext('2d');
    var img = new Image();
    reader.onload = function (e: any) {
      console.log(input.id.replace("Event", ""));
      var widthSize = 768;
      var heigthSize = 1024;

      ctx.drawImage(img, 100, 100, widthSize, heigthSize);


      img.src = e.target.result;

      reader.readAsDataURL(input.files[0]);
    }
  }

  public showSomething() {
    var reader = new FileReader();
    var img = new Image();

    img.onload = function () {
      console.log('Stop here');
      let imageToShow = <HTMLInputElement>document.getElementById('imageToShow');

      imageToShow.src = img.src;
    }

    img.src = URL.createObjectURL(this.fileInput.nativeElement.files[0]);
  }

  // public showSomethingWithCanvas(){
  //   var reader = new FileReader();
  //   var ctx = this.canvas.nativeElement.getContext("2d");
  //   var img = new Image();


  //   let canvas = this.canvas;
  //   let width = this.width;

  //   img.onload = function () {


  //     ctx.drawImage(img,0,0, img.width, img.height);

  //     width = 1000;   

  //     canvas.height = img.height;

  //     // ctx.font = "bold 24pt sans-serif";
  //     // ctx.shadowColor = 'black';
  //     // ctx.fillStyle = "black";
  //     // ctx.shadowBlur = 7;
  //     // ctx.fillText('Latitud : ', 200,200);
  //   }

  //     img.src = URL.createObjectURL(this.fileInput.nativeElement.files[0]);
  // }


}