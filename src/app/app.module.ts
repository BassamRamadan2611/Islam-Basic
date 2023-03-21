import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuraanComponent } from './components/quraan/quraan.component';
import { HttpClientModule} from '@angular/common/http';
import { SurahDetailsComponent } from './components/surah-details/surah-details.component';
import { HomeComponent } from './components/home/home.component';
import { SurahComponent } from './components/surah/surah.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { SahihBukhariComponent } from './components/sahih-bukhari/sahih-bukhari.component';
import { AzkarComponent } from './components/azkar/azkar.component';
import { AzkarMasaaComponent } from './components/azkar-masaa/azkar-masaa.component';
import { PostPrayerComponent } from './components/post-prayer/post-prayer.component';
import { PrayTimeComponent } from './components/pray-time/pray-time.component';
import { AzkarSabahComponent } from './components/azkar-sabah/azkar-sabah.component';
import { QuraanAudioComponent } from './components/quraan-audio/quraan-audio.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchQuraanAudioPipe } from './pipes/search-quraan-audio.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './components/contact/contact.component';
import { HadithsComponent } from './components/hadiths/hadiths.component';
import { HadithsChapterComponent } from './components/hadiths-chapter/hadiths-chapter.component';
import { ChapterDetailsComponent } from './components/chapter-details/chapter-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuraanComponent,
    SurahDetailsComponent,
    HomeComponent,
    SurahComponent,
    LoadingSpinnerComponent,
    SuggestionComponent,
    SliderComponent,
    FooterComponent,
    SahihBukhariComponent,
    AzkarComponent,
    AzkarMasaaComponent,
    PostPrayerComponent,
    PrayTimeComponent,
    AzkarSabahComponent,
    QuraanAudioComponent,
    ContactComponent,
    SearchPipe,
    SearchQuraanAudioPipe,
    HadithsComponent,
    HadithsChapterComponent,
    ChapterDetailsComponent



  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
