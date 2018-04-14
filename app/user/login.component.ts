import { Component, Inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { Toastr, TOASTR_TOKEN } from "../common/index";
import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em { float: right; color:#E05C65; padding-left:10px; }
    `]
})
export class LoginComponent {
    loginInvalid = false;

    constructor(private authService: AuthService,
        private router: Router) {
    }

    login(formValues) {
        this.authService.loginUser(formValues.username,
            formValues.password)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true
                } else {
                    this.router.navigate(['spaces'])
                }
            })
    }

    cancel() {
        this.router.navigate(['spaces'])
    }
}