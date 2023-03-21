import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-azkar-masaa',
  templateUrl: './azkar-masaa.component.html',
  styleUrls: ['./azkar-masaa.component.css']
})
export class AzkarMasaaComponent {
  AzkarMasaa:any=[]
  title:any

constructor( private service:UrlsService){
this.azkarMasaa()
}
  ngOnInit(): void {
    
  }
  azkarMasaa(){
    this.service.getAzkarMasaa().subscribe(result=>{
      this.AzkarMasaa= result.content
      console.log(this.AzkarMasaa)
      this.title = result.title
      console.log(this.title)
    })
}}
