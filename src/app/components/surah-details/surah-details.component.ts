import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-surah-details',
  templateUrl: './surah-details.component.html',
  styleUrls: ['./surah-details.component.css']
})
export class SurahDetailsComponent {
  AllAyat:any= []
  id:any
  data:any=[]
  loading:boolean=false;
surahName:any
  constructor(private service:UrlsService,private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
  console.log(this.id)
  }
ngOnInit(): void {
this.getAyatOfSurah();
}


getAyatOfSurah(){
  this.loading=true
  this.service.getAyatOfSurah(this.id).subscribe(result=>{
    this.data=result.data.verses
  this.surahName =result.data.name.long;
  this.loading=false
    console.log(this.data)
    console.log(this.surahName)
  },error=>{
    this.loading=false
    alert(error.message)

  })


}
getDataSurah(){
    
}
}
