import { Injectable } from '@angular/core'
import { IDevice } from '../index';

@Injectable()
export class VoterService {

    deleteVoter(device: IDevice, voterId: number) {
        device.voters = device.voters.filter(voter => voter !== voterId)
    }

    addVoter(device: IDevice, voterId: number) {
        device.voters.push(voterId)
    }

    userHasVoted(device: IDevice, voterId: number) {
        return device.voters.some(voter => voter === voterId)
    }

}