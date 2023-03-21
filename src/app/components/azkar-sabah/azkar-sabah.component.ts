import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-azkar-sabah',
  templateUrl: './azkar-sabah.component.html',
  styleUrls: ['./azkar-sabah.component.css']
})
export class AzkarSabahComponent {
  AzkarSabah:any=[]
  title:any

constructor( private service:UrlsService){
this.azkarSabah()
}
  ngOnInit(): void {
    
  }
  azkarSabah(){
    this.service.getAzkarSabah().subscribe(result=>{
      this.AzkarSabah= result.content
      console.log(this.AzkarSabah)
      this.title = result.title
      console.log(this.title)
    })
  }

}
