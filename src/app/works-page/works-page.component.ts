import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works-page',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent implements OnInit {
  works: Observable<any[]>;

  constructor(
    private storage: AngularFireStorage,
    firestore: AngularFirestore,
    private router: Router
  ) {
    this.works = firestore.collection('works').valueChanges();
    // console.log(this.works);
  }

  ngOnInit(): void {
  }

  gotoWork(work: any) {
    console.log('gotoWork: ', work);
  }

}
