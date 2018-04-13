import { Injectable, EventEmitter } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { ISpace, DeviceType } from './space.model';
import { Observable } from 'rxjs/Rx';
import { IDevice } from '../index';
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ESHAppComponent } from '../../esh-app.component';

const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpaceService {

    constructor(private http: Http) {
        let headers = new Headers()
        headers.append('Accept', 'application/json')
        headers.append("Authorization", "Basic " + localStorage.getItem('authToken'))

        let options = new RequestOptions()
        options.headers = headers
        this.httpOptions = options
    }

    private spacesApiUrl = ESHAppComponent.API_URL + '/spaces';
    private devicesApiUrl = ESHAppComponent.API_URL + '/devices';
    private httpOptions;

    getSpaces(): Observable<ISpace[]> {
        return this.http.get(this.spacesApiUrl, this.httpOptions).map(response => {
            return <ISpace[]>response.json()
        }).catch(this.handleError)
    }

    getSpace(id: number): Observable<ISpace> {
        return this.http.get(this.spacesApiUrl + "/" + id, this.httpOptions).map(response => {
            return <ISpace>response.json()
        }).catch(this.handleError)
    }

    saveSpace(space): Observable<ISpace> {
        return this.http.post(this.spacesApiUrl, space, this.httpOptions)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    updateSpace(space) {
        return this.http.put(this.spacesApiUrl, space, this.httpOptions)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    searchDevices(searchTerm: string) {
        return this.http.get(this.devicesApiUrl + '?search=' + encodeURIComponent(searchTerm), this.httpOptions)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.status)
    }

}