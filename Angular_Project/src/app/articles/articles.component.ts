import { Component } from '@angular/core';

import { HttpService } from '../services/Http.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

  public articlesList!:any;
  public title: String = "";
  public from:any=1;
  public to:any =30;

  constructor(public service: HttpService){
    this.service.getAllArticles().subscribe((data:any) => this.articlesList = data.articles)
  }

  
  filter() {

    console.log(this.title, this.from,this.to);
  

    this.service.getFilteredArticles(this.title, this.from, this.to).subscribe( (data:any) =>{
    this.articlesList = data.articles
    console.log(data);
    
  }  )

  
 
}
selectObject(index:any){
    this.service.selectObject = this.articlesList[index]
  }

  
  toggleFavorite(articles:any) {
  console.log(articles);
  

  }
 
}
