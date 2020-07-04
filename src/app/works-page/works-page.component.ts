import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  img1: Observable<string | null>;
  img2: Observable<string | null>;
  img3: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
    const img1 = this.storage.ref('thumbnails/work1.jpg');
    this.img1 = img1.getDownloadURL();

    const img2 = this.storage.ref('thumbnails/work2.jpg');
    this.img2 = img2.getDownloadURL();

    const img3 = this.storage.ref('thumbnails/work3.jpg');
    this.img3 = img3.getDownloadURL();
  }

  ngOnInit(): void {
  }

}
