import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../services/image.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  url1: any[];
  url2: any[];
  url3: any[];
  url4: any[];

  constructor(private imageService: ImageService) {
    this.url1 = new Array();
    this.url2 = new Array();
    this.url3 = new Array();
    this.url4 = new Array();
  }

  ngOnInit() {
    this.imageService.getImageUrls().subscribe(urls => {
      urls.forEach((url, index) => {
        url.url = "http://localhost:8080/files/" + url.url;
        if (index % 4 == 0) this.url1.push(url);
        if (index % 4 == 1) this.url2.push(url);
        if (index % 4 == 2) this.url3.push(url);
        if (index % 4 == 3) this.url4.push(url);
      });
    });
  }

}
