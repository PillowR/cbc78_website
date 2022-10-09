import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public _album: Array<any> = []; 

  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 3; i++) {
      const src = '/assets/img/carousel-' + i + '.jpeg'; const caption = 'Image ' + i + ' caption here'; 
      const thumb = '/assets/img/carousel-' + i + '.jpeg'; 
      const album = { src: src, caption: caption, thumb: thumb }; 
      this._album.push(album); 
   } 
  } 
  open(index: number): void { // open lightbox 
    this._lightbox.open(this._album, index); 
    } 
    
    close(): void { // close lightbox programmatically 
    this._lightbox.close(); 
    }

  ngOnInit(): void {
  }

}
