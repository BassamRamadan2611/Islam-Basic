import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchQuraanAudio'
})
export class SearchQuraanAudioPipe implements PipeTransform {

 
  transform(item:any[], term:string): any {



    if(term == undefined){
      return item;
    }
    return item.filter(function(item){

      return item.titleAr.toLowerCase().includes(term.toLowerCase());


    })
 
  }
  

}
