import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: `app/user/profile.component.html`,
  styles: [`
    em {float:right; color:#E05C64; padding-left: 10px}
    .error input {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName:FormControl
  private lastName:FormControl

  constructor(private router: Router,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.firstName = new FormControl(
      this.authService.currentUser.firstName, Validators.required
    )
    this.lastName = new FormControl(
      this.authService.currentUser.lastName, Validators.required
    )
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }
 
  saveProfile(formValue) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValue.firstName,
        formValue.lastName
      )
      this.router.navigate(['spaces'])
    }
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }

  cancel() {
    this.router.navigate(['spaces'])
  }

}