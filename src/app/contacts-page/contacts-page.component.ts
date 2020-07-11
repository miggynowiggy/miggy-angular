import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  links: Array<any>;
  resumeURL: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('resume/Mendoza-Linkedin-Built-Resume.pdf');
    this.resumeURL = ref.getDownloadURL();
  }

  ngOnInit(): void {
    this.links = [
      { icon: 'fab fa-facebook', name: 'facebook', url: 'https://web.facebook.com/migginimigg'},
      { icon: 'fab fa-facebook-messenger', name: 'messenger', url: 'https://www.messenger.com/t/migginimiggi'},
      { icon: 'fab fa-linkedin', name: 'linkedin', url: 'https://www.linkedin.com/in/miggymendoza'},
      { icon: 'fab fa-github', name: 'github', url: 'https://github.com/miggynowiggy'}
    ];
  }

}
