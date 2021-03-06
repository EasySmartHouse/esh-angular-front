import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import { ESHAppComponent } from "../esh-app.component";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(public http: Http) { }

    private userApiUrl = ESHAppComponent.API_URL + '/user';
    currentUser: IUser

    getUser() {
        let headers = new Headers();
        headers.append('Accept', 'application/json')
        headers.append("Authorization", "Basic " + localStorage.getItem('authToken'));

        let options = new RequestOptions();
        options.headers = headers;

        this.http.get(this.userApiUrl + "/login", options)
            .map(response => {
                return <IUser>response.json();
            })
            .catch(this.handleError)
            .subscribe(user => {
                this.currentUser = user;
            })
    }

    loginUser(username: string, password: string) {
        let headers = new Headers();
        headers.append('Accept', 'application/json')

        var base64Credential: string = btoa(username + ':' + password);
        headers.append("Authorization", "Basic " + base64Credential);

        let options = new RequestOptions();
        options.headers = headers;

        return this.http.get(this.userApiUrl + "/login", options)
            .do(response => {
                let user = <IUser>response.json()
                if (user) {
                    localStorage.setItem('authToken', base64Credential)
                    this.currentUser = user;
                }
                return user;
            }).catch(error => {
                return Observable.of(false)
            })
    }

    private handleError(error: Response) {
        return Observable.throw(error.status)
    }

    isAuthenticated() {
        return !!localStorage.getItem('authToken');
    }

    updateCurrentUser(firstname: string, lastname: string) {
        this.currentUser.firstname = firstname
        this.currentUser.lastname = lastname

        let headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append('Content-Type', 'application/json')
        headers.append("Authorization", "Basic " + localStorage.getItem('authToken'))

        let options = new RequestOptions();
        options.headers = headers;

        return this.http.put(`${this.userApiUrl}/${this.currentUser.id}`,
            JSON.stringify(this.currentUser), options
        )
    }

    logOut() {
        return this.http.post(ESHAppComponent.API_URL + "/logout", {})
            .map((response: Response) => {
                localStorage.removeItem('authToken');
                this.currentUser = undefined
            });
    }
}