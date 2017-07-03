import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../services/image.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  urls: any[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImageUrls().subscribe(urls => {
      this.urls = urls;
    });
  }

}
