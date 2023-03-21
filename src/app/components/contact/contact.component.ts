import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { UrlsService } from 'src/app/services/urls.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit{

  FormData!: FormGroup;

  constructor(private builder: FormBuilder ,private service:UrlsService){}
  
  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Message: new FormControl('', [Validators.required])
    })
    }

    onSubmit(FormData:any){
      console.log(FormData)
      this.service.postMessage(FormData).subscribe(response=>{
        location.href ='https://mailthis.to/confirm'
        console.log(response)
      },error=>{
        console.warn(error.responseText)
        console.log({ error })
      })
  
    }
  
}
