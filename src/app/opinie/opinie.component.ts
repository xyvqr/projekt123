import {Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Opinion} from '../interfaces/Opinion';
import { AuthService } from '../services/auth.service';
import {OpinionService} from '../services/opinion.service';
import { Globals } from '../shared/globals';

@Component({
  selector: 'app-offer',
  templateUrl: './opinie.component.html',
  styleUrls: ['./opinie.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class OpinieComponent implements OnInit {

  opinions: Opinion[];

  opinionForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  });

  constructor(private opinionService: OpinionService, public authService: AuthService, private router:Router) {

  }

  ngOnInit(): void {
    this.getOpinions();
  }

  getRequiredErrorMessage(){
    return Globals.required;
  }

  newOpinion(){
    if(this.opinionForm.invalid){
      this.validateAllFormFields(this.opinionForm);
      return;
    }

    this.opinionService.create(this.opinionForm.value).subscribe(result => {
      if(result){
        this.opinionForm.reset();
        this.getOpinions();
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

  getOpinions(){
    this.opinionService.getOpinions().subscribe(result => {
      if (result) {
        this.opinions = result;
      }
    });
  }
}
