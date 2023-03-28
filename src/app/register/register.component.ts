import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PasswordValidator } from '../shared/custom-validators/password-validator';
import { Globals } from '../shared/globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  password = new FormControl('', [Validators.required, PasswordValidator.lowercaseLetter(), PasswordValidator.uppercaseLetter(),
    PasswordValidator.digit(), PasswordValidator.specialCharacter(), Validators.minLength(8)]);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userName: new FormControl('', [Validators.required]),
    password: this.password
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {

    if(this.registerForm.invalid){
      this.validateAllFormFields(this.registerForm);
      return;
    }

    this.authService.register(this.registerForm.value).subscribe(result => {
      if(result){
        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    console.log('cancelled');
  }

  getInvalidEmailErrorMessage(){
    return Globals.invalidEmail;
  }

  getRequiredErrorMessage(){
    return Globals.required;
  }

  getPasswordErrorMessage(){
    return this.registerForm.controls['password'].hasError('required') ? this.getRequiredErrorMessage() :
      this.registerForm.controls['password'].hasError('lowercase') ? this.getLowercaseErrorMessage() :
        this.registerForm.controls['password'].hasError('uppercase') ? this.getUppercaseErrorMessage() :
          this.registerForm.controls['password'].hasError('digit') ? this.getDigitErrorMessage() :
            this.registerForm.controls['password'].hasError('specialCharacter') ? this.getSpecialCharacterErrorMessage() :
              this.registerForm.controls['password'].hasError('minlength') ? this.getPasswordLengthError() : '';
  }

  getLowercaseErrorMessage(){
    return Globals.passwordLowercaseError;
  }

  getUppercaseErrorMessage(){
    return Globals.passwordUppercaseError;
  }

  getDigitErrorMessage(){
    return Globals.passwordDigitError;
  }

  getSpecialCharacterErrorMessage(){
    return Globals.passwordSpecialCharacterError;
  }

  getPasswordLengthError(){
    return Globals.passwordLengthError;
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
