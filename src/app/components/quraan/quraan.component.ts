import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-quraan',
  templateUrl: './quraan.component.html',
  styleUrls: ['./quraan.component.css']
})
export class QuraanComponent implements OnInit {
  term!:string
AllSurah:any=[]
AllAyat:any= []

loading:boolean=false;
@Input() data:any={}
@Output() surah = new EventEmitter() 

  constructor(private service:UrlsService){
    this.getAllData()
  }
ngOnInit(): void {
 
}

getAllData(){
  this.loading=true
 this.service.getQuraanData().subscribe(result=>{
this.AllSurah = result;
this.loading=false
this.surah.emit({surah:this.data})
console.log(this.AllSurah)

  },error=>{
    this.loading=false
    alert(error.message)
  }
  )
}

}
