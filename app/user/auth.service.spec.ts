import {} from 'jasmine';
import { AuthService } from './auth.service';
import { IUser } from "./user.model";
import { ESHAppComponent } from '../esh-app.component';

describe('AuthService', () => {
    let authService: AuthService,
    mockHttp

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'put', 'post'])
        authService = new AuthService(mockHttp)
    })

    describe('updateCurrentUser', () => {
        it('should update users firstname and lastname', ()=>{
            let user = {id:15, firstname:'john', lastname:'someone'}
            authService.currentUser = <IUser>user

            authService.updateCurrentUser('mike', 'anotherman')

            expect(authService.currentUser.firstname).toBe('mike')
            expect(authService.currentUser.lastname).toBe('anotherman')
        })

        it('should call http.put with the right url', ()=>{
            let user = {id:15, firstname:'john', lastname:'someone'}
            authService.currentUser = <IUser>user

            authService.updateCurrentUser('mike', 'anotherman')

            expect(mockHttp.put).toHaveBeenCalledWith(ESHAppComponent.API_URL + '/user/15', 
            JSON.stringify(user), jasmine.any(Object))
        })
    })

})