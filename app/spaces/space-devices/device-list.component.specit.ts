import { TestBed, async, ComponentFixture} from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { DeviceListComponent } from './device-list.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { IDevice, DeviceType } from '../shared/space.model'
import { By } from '@angular/platform-browser'
import { UpvoteComponent, SwitchValuePipe, DeviceTypePipe } from '../index';
import { CollapsibleWellComponent } from '../../common/index';

describe('DeviceListComponentIntegrated', () => {
    let fixture: ComponentFixture<DeviceListComponent>,
    component: DeviceListComponent,
    element: HTMLElement,
    debugEl: DebugElement

    beforeEach(async(()=>{
        let mockAuthService = {
            getUser: () => {},
            isAuthenticated: () => true,
            currentUser: {username: 'mike'}
        }
        let mockVoterService = {
            userHasVoted: () => true
        }

        TestBed.configureTestingModule({
             imports: [],
             declarations: [
                 DeviceListComponent,
                 UpvoteComponent,
                 SwitchValuePipe,
                 DeviceTypePipe,
                 CollapsibleWellComponent
             ],
             providers:[
                 { provide: AuthService, useValue: mockAuthService },
                 { provide: VoterService, useValue: mockVoterService }
             ], 
             schemas:[]
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(DeviceListComponent)
        component = fixture.componentInstance
        debugEl = fixture.debugElement
        element = fixture.nativeElement
        fixture.detectChanges()
    })

    describe('initial display', () => {
        it('should create the component', () => {  
            expect(component).toBeTruthy()
        });

        it('should have the correct device title', () => {
            component.devices = [
                {id: 3, label: 'simple sensor', address: 'AAAA3434df', 
                enabled: true, deviceType: DeviceType.Sensor, 
                description: 'simple sensor description',
                value: 34.3444,
                voters: [34, 3, 5]}
            ]
            component.filterBy = 'all'
            component.sortBy = 'label'

            component.ngOnChanges()
            fixture.detectChanges()

            expect(element.querySelector('[well-title]').textContent)
            .toContain('simple sensor')
        })
    })


})

