import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public editorValue: string = '';

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Somente imagens são suportadas.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      console.log(this.imgURL);
    }
  }
}
