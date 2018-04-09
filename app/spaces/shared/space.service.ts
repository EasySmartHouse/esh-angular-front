import { Injectable, EventEmitter } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { ISpace, DeviceType } from './space.model';
import { Observable } from 'rxjs/Rx';
import { IDevice } from '../index';
import { Http, Response, Headers, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpaceService {

    constructor(private http: Http) {
    }

    private spacesUrl = 'http://localhost:8080/spaces';
    private devicesUrl = 'http://localhost:8080/devices';

    getSpaces(): Observable<ISpace[]> {
        return this.http.get(this.spacesUrl).map(response => {
            return <ISpace[]>response.json()
        }).catch(this.handleError)
    }

    getSpace(id: number): Observable<ISpace> {
        return this.http.get(this.spacesUrl + "/" + id).map(response => {
            return <ISpace>response.json()
        }).catch(this.handleError)
    }

    saveSpace(space): Observable<ISpace> {
        let options = new RequestOptions(httpOptions)

        return this.http.post(this.spacesUrl, space, options)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    updateSpace(space) {
        let options = new RequestOptions(httpOptions)

        return this.http.put(this.spacesUrl, space, options)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    searchDevices(searchTerm: string) {
        let options = new RequestOptions(httpOptions)

        return this.http.get(this.devicesUrl + '?search=' + encodeURIComponent(searchTerm), options)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.status)
    }

}