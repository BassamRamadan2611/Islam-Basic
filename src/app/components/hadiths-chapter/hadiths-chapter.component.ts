import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-hadiths-chapter',
  templateUrl: './hadiths-chapter.component.html',
  styleUrls: ['./hadiths-chapter.component.css']
})
export class HadithsChapterComponent {
  @Input() Chapter:any={}



  constructor(private service:UrlsService,private route:ActivatedRoute){
 

  }

getChapters(){

}

}
