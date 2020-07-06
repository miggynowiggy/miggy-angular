import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-view-work-page',
  templateUrl: './view-work-page.component.html',
  styleUrls: ['./view-work-page.component.scss']
})

export class ViewWorkPageComponent implements OnInit {
  @ViewChild('mainCarousel') carousel: ElementRef;

  workDoc: AngularFirestoreDocument<any>;
  work: Observable<any>;
  selectedId: string;
  photos: Array<string>;
  photosRef: Observable<any[]>;

  mainCarousel: ElementRef;

  constructor(
    private route: ActivatedRoute,
    firestore: AngularFirestore,
  ) {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    console.log(this.selectedId);
    this.workDoc = firestore.doc(`works/${this.selectedId}`);
    this.work = this.workDoc.valueChanges();
   }

  ngOnInit(): void {
  }

}
