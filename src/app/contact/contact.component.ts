import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {catchError, map, Observable, of} from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { Globals } from '../shared/globals';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  apiLoaded: Observable<boolean>;

  markerPosition : {
    lat: -25.344, lng: 131.031
  };

  messageForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  });

  constructor(httpClient: HttpClient, public authService: AuthService, private messageService: MessageService) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyBfndnFvcTJpXE67XiUSBnkdybtvjJZRNk', 'callback')
      .pipe(
        map(() => {
          return true;
        }),
        catchError(() => {
          return of(true);
        }),
      );
  }

  ngOnInit(): void {
  }

  getRequiredErrorMessage(){
    return Globals.required;
  }

  newMessage(){
    if(this.messageForm.invalid){
      this.validateAllFormFields(this.messageForm);
      return;
    }

    const data = {
      userName: this.authService.getUser().userName,
      text: this.messageForm.controls['text'].value
    };

    this.messageService.create(data).subscribe(result => {
      if(result){
        this.messageForm.reset();
      }
    });
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
