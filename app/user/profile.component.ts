import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

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
  private firstname: FormControl
  private lastname: FormControl

  constructor(private router: Router,
    private authService: AuthService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    this.authService.getUser()
    this.firstname = new FormControl(
      this.authService.currentUser.firstname, [Validators.required,
      Validators.pattern('[a-zA-Z].*')]
    )
    this.lastname = new FormControl(
      this.authService.currentUser.lastname, Validators.required
    )
    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    })
  }

  saveProfile(formValue) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValue.firstname,
        formValue.lastname
      ).subscribe(() => {
        this.toastr.success('Profile saved')
      })
    }
  }

  logout() {
    this.authService.logOut()
      .subscribe(() => {
        this.router.navigate(['/user/login']);
      })
  }

  validateLastName() {
    return this.lastname.valid || this.lastname.untouched
  }

  validateFirstName() {
    return this.firstname.valid || this.firstname.untouched
  }

  cancel() {
    this.router.navigate(['spaces'])
  }

}