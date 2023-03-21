import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-quraan-audio',
  templateUrl: './quraan-audio.component.html',
  styleUrls: ['./quraan-audio.component.css']
})
export class QuraanAudioComponent {

  term:any
  surahData:any=[]
  loading:boolean=false
constructor(private service :UrlsService){
  this.getSurahData()
}



getSurahData(){
  this.loading=true
  this.service.getQraanSurahData().subscribe(result=>{
    this.surahData = result
    this.loading=false
    console.log(this.surahData)
  })
}
}
