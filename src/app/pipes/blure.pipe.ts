import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blure'
})
export class BlurePipe implements PipeTransform {

  transform(value: string,args: number): string {
     
    let blur = ''
    let string = value.slice( args, value.length )
    for( let i = 0; i < args; i++){
      blur+= '*'
    }
    string = blur + string;
    return string;
  }

}
