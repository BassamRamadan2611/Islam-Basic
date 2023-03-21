import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = "my-app"
  windowScrolled: boolean=false;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  
  onWindowScroll() {
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
        this.windowScrolled = true;
    } 
   else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
        this.windowScrolled = false;
    }
}

  scrollToTop(): void {
    
  
    window.scrollTo(0, 0);
  }

  ngOnInit(): void {
    
  }
}
