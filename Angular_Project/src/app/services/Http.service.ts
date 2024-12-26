import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  public selectObject:any
  
  getAllArticles() {
    return this.http.get("https://newsapi.org/v2/everything?q=tesla&from=2024-12-01&sortBy=publishedAt&apiKey=bb65851eed914b3ab977c6aab1a94450")
  }
  getFilteredArticles(title:String ,from:any,to:any) {
    return this.http.get(`https://newsapi.org/v2/everything?q=${title}&from=2024-12-${from}&to=2024-12-${to}&sortBy=popularity&apiKey=bb65851eed914b3ab977c6aab1a94450`)

}

}