import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  posts:Post[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
     this.dataservice.getPosts().subscribe((posts)=>{

      this.posts=posts;
    });
  }

}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
