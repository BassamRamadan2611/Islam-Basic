import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AzkarMasaaComponent } from './components/azkar-masaa/azkar-masaa.component';
import { AzkarSabahComponent } from './components/azkar-sabah/azkar-sabah.component';
import { AzkarComponent } from './components/azkar/azkar.component';
import { ChapterDetailsComponent } from './components/chapter-details/chapter-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { HadithsComponent } from './components/hadiths/hadiths.component';
import { HomeComponent } from './components/home/home.component';
import { PostPrayerComponent } from './components/post-prayer/post-prayer.component';
import { PrayTimeComponent } from './components/pray-time/pray-time.component';
import { QuraanAudioComponent } from './components/quraan-audio/quraan-audio.component';
import { QuraanComponent } from './components/quraan/quraan.component';
import { SahihBukhariComponent } from './components/sahih-bukhari/sahih-bukhari.component';
import { SurahDetailsComponent } from './components/surah-details/surah-details.component';

const routes: Routes = [
  {path:'quraan-written', component:QuraanComponent},
  {path:'quraan-audio', component:QuraanAudioComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'surah-details/:id',component:SurahDetailsComponent},
  {path:'azkar',component:AzkarComponent},
  {path:'post-prayer',component:PostPrayerComponent},
  {path:'azkar-sabah',component:AzkarSabahComponent},
  {path:'azkar-masaa',component:AzkarMasaaComponent},
  {path:'pray-time',component:PrayTimeComponent},
  {path:'hadiths',component:HadithsComponent},
  {path:'hadiths-chapters',component:HadithsComponent},
  {path:'chapter-details/:id',component:ChapterDetailsComponent},
  {path:'chapter-hadiths/:id',component:SahihBukhariComponent},
  {path:'' ,redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
