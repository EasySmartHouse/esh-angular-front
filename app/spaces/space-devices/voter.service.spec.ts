import {} from 'jasmine';
import { VoterService, IDevice } from '../index';

describe('VoterService', () => {
    let voterService: VoterService

    beforeEach(() => {
        voterService = new VoterService()
    })

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', ()=>{
            var device = {id:6, voters: [5,7,8]}
            voterService.deleteVoter(<IDevice>device, 7)

            expect(device.voters.length).toBe(2)
            expect(device.voters[1]).toBe(8)
        })
    })

    describe('addVoter', () => {
        it('should add the voter to the list of voters', ()=>{
            var device = {id:6, voters: [5,8]}
            voterService.addVoter(<IDevice>device, 9)

            expect(device.voters.length).toBe(3)
            expect(device.voters[2]).toBe(9)
        })
    })

    describe('addVoter', () => {
        it('checks if the user has voted', ()=>{
            var device = {id:6, voters: [5,8]}
            
            expect(voterService.userHasVoted(<IDevice>device, 5)).toBe(true)
            expect(voterService.userHasVoted(<IDevice>device, 6)).toBe(false)
        })
    })
    
})
