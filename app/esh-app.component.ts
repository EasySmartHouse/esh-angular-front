import { Component } from '@angular/core'

@Component({
    selector: 'esh-app',
    template: `<nav-bar></nav-bar>
    <router-outlet></router-outlet>`
})
export class ESHAppComponent {
    title = 'Easy SmartHouse';
    static API_URL = "http://localhost:8080";
}