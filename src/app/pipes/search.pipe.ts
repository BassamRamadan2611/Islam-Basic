import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  
  transform(item:any[], term:string): any {



    if(!term){
      return item;
    }
    return item.filter(function(item:any){

      return item.text.includes(term);


    })
 
  }
  

}
