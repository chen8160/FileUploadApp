import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ImageService {

  images: any[];

  constructor(private http: Http) { }

  getImageUrls() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let ep = this.prepEndpoint('getAllimgs');
    return this.http.get(ep, { headers: headers })
      .map(res => res.json());
  }

  prepEndpoint(ep) {
    return 'http://localhost:8080/' + ep;
    // return ep;
  }

}
