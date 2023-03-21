import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-sahih-bukhari',
  templateUrl: './sahih-bukhari.component.html',
  styleUrls: ['./sahih-bukhari.component.css']
})
export class SahihBukhariComponent implements OnInit {
  id:any
  term: any;
  hadithText:any=[]
  loading:boolean=false;
  allHadith:any=[]
  title:any
  constructor( private service:UrlsService ,private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    this.getAllHadithsOfBook()
  }


pageNumbers:number[]=[];
filteredHadiths:any=[]
currentPage = 1;
bokhariHadiths:any=[]
showHadith:boolean=false

ngOnInit(): void {
 
}

getAllHadithsOfBook(){
  this.loading=true
 this.service.getHadithOfBooks(this.id).subscribe(result=>{
this.allHadith =result.hadiths
this.hadithText = result.hadiths.text
this.title = result.metadata.name
this.loading=false
console.log(this.allHadith)
 })
  }

}

/*
getHadith(){
  for(let i =1 ; i <6 ; i++)
  {
    this.pageNumbers.push(i);
  }
  this.loading=true
  this.servuce.grtHadithBokhary(this.currentPage).subscribe(result=>{
  this.allHadith = result.hadiths.data


  this.loading = false
  console.log(this.allHadith)
},error=>{
  this.loading=false
  alert(error.message)
})

}
changeNumber(ind:any){
this.currentPage=ind;
this.servuce.grtHadithBokhary(this.currentPage).subscribe(result=>{
  this.allHadith = result.hadiths.data})
}

prev()
{
   this.changeNumber(this.currentPage -1)
}
next()
{
   this.changeNumber(this.currentPage +1)
}


filter(){
this.filteredHadiths = this.allHadith.filter((hadith:any)=> hadith.hadithArabic.includes(this.term))
}
}
*/