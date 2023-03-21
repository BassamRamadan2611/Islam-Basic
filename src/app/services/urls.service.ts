import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  email:string='bassamramadan964@gmail.com'
  private api="https://mailthis.to/"+ this.email

  constructor( private http:HttpClient) { }

  getQuraanData():Observable<any>{

    return this.http.get("https://api.npoint.io/99c279bb173a6e28359c/data")

  }
  getAyatOfSurah(id:any):Observable<any>{
    return this.http.get("https://api.quran.gading.dev/surah/"+id)

  }
  grtHadithBokhary(pageNumber:any):Observable<any>{
    return this.http.get("https://www.hadithapi.com/public/api/hadiths?page="+pageNumber+"&apiKey=$2y$10$76SJJQsMX3fN2Ep14grMrO9IOIRc1Wwok5rFpUrUpMe7S1jE1r0e")
  }
  getAzkarMasaa():Observable<any>{
return this.http.get("https://ahegazy.github.io/muslimKit/json/azkar_massa.json");
  }
  getAzkarSabah():Observable<any>{
    return this.http.get("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json");
      }
      getPostPrayer():Observable<any>{
        return this.http.get("https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json");
          }

          getPrayTime(date:any):Observable<any>{
            return this.http.get("https://api.aladhan.com/v1/timingsByAddress/"+date+"?address=cairo")
          }
          getQraanSurahData(){
            return this.http.get("https://raw.githubusercontent.com/semarketir/quranjson/master/source/surah.json")
          }


          getHadithOfBooks(bookName:any):Observable<any>{
            return this.http.get("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/"+bookName+".json")
          }

          getChaptersOfBooks(bookName:any):Observable<any>{
            return this.http.get("https://hadithapi.com/public/api/"+bookName+"/chapters?&apiKey=$2y$10$76SJJQsMX3fN2Ep14grMrO9IOIRc1Wwok5rFpUrUpMe7S1jE1r0e")
          }
          getBokharyDetails(sectionNumber:any):Observable<any>{
            return this.http.get("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari/sections/"+sectionNumber+".json")
          }
          postMessage(input:any){
            return this.http.post(this.api,input,{responseType:'text'}).pipe(
              map(
              (response:any)=>{
              if(response){
               return response
             }
              },(error:any)=>{
                return error;
              }
              )

          
            )
            
        
        
          }
}
