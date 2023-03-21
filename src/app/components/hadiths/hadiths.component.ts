import { Component } from '@angular/core';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-hadiths',
  templateUrl: './hadiths.component.html',
  styleUrls: ['./hadiths.component.css']
})
export class HadithsComponent {
books:any

  constructor(private service :UrlsService){
    this.getBooks()

  }


  getBooks(){



}

}
