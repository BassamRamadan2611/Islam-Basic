import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-post-prayer',
  templateUrl: './post-prayer.component.html',
  styleUrls: ['./post-prayer.component.css']
})
export class PostPrayerComponent {
  
  postPrayer:any={}
  title:any

constructor( private service:UrlsService){
this.getpostPrayer()
}
  ngOnInit(): void {
    
  }
  getpostPrayer(){
    this.service.getPostPrayer().subscribe(result=>{
      this.postPrayer= result.content
      console.log(this.postPrayer)
      this.title = result.title
      console.log(this.title)
    })

}

}
