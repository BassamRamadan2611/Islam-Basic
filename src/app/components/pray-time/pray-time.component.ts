import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-pray-time',
  templateUrl: './pray-time.component.html',
  styleUrls: ['./pray-time.component.css']
})
export class PrayTimeComponent {
  hijri:any=[]
 timings:any={}
  allData:any=[]
  gregorian:any=[]
  loading:boolean=false
  currentDate = new Date()
  prayTimes:any=[]
  add:any=1
  time:any 
  constructor( private service:UrlsService){
    this.time =this.currentDate.getHours() + ":" + this.currentDate.getMinutes() + ":" + this.currentDate.getSeconds();
  this.getDataPray()
 
  }
  getDataPray(){
    this.loading=true
this.service.getPrayTime(this.currentDate).subscribe(result=>{
  this.allData =result.data
  this.timings=result.data.timings
  this.hijri =result.data.date.hijri
  this.gregorian = result.data.date.gregorian
console.log(this.time)
  console.log(this.prayTimes)
  this.loading=false
  
  
})

  }
}
