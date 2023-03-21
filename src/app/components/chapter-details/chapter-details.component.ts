import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-chapter-details',
  templateUrl: './chapter-details.component.html',
  styleUrls: ['./chapter-details.component.css']
})
export class ChapterDetailsComponent {
  id:any
  booksName :any=["abudawud","bukhari","ibnmajah","malik","muslim","nasai","tirmidhi"]

  AllChapters:any=[]
  constructor(private service:UrlsService,private route:ActivatedRoute){
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
    console.log(this.booksName)
    this.getBookChapter()
  }

  getBookChapter(){
    this.service.getChaptersOfBooks(this.id).subscribe(result=>{
      this.AllChapters = result.chapters
      console.log(this.AllChapters)
    })
  }
}
