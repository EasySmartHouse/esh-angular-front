import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'switchValue'})
export class SwitchValuePipe implements PipeTransform {

    transform(value: number) {
        switch(value){
            case 0: return 'Off'
            case 1: return 'On'
            default: value.toString();
        }
    }
    
}

