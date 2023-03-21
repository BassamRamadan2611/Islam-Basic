import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css']
})
export class SurahComponent {
  term!:string
  @Input() data:any={}
@Output() item = new EventEmitter() 

}
