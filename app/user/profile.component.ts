import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: `app/user/profile.component.html`,
})
export class ProfileComponent implements OnInit{
  profileForm:FormGroup

  constructor(private router: Router, 
    private authService:AuthService){
  }

  ngOnInit(): void {
    let firstName = new FormControl(
      this.authService.currentUser.firstName
    )
    let lastName = new FormControl(
      this.authService.currentUser.lastName 
    )
    this.profileForm = new FormGroup({
        firstName: firstName,
        lastName: lastName
    })
  }

  saveProfile(formValue) {
    this.authService.updateCurrentUser(
      formValue.firstName, 
      formValue.lastName
    )
    this.router.navigate(['spaces'])
  }

  cancel() {
    this.router.navigate(['spaces'])
  }

}