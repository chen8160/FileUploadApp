import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private http: Http) { }

  uploader = new FileUploader({ url: 'http://localhost:8000/upload' });

  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  ngOnInit() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
    };
  }

  onClick() {
    // console.log('Clicked!');
    // this.http.get('http://localhost:8000/test').subscribe(data => {
    //   console.log(data['_body']);
    // });

    this.uploader.uploadAll();

    // this.http.post('http://localhost:8000/test', "abc").map(res => res.json()).subscribe(data => {
    //   console.log(data);
    // });

  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }



}
