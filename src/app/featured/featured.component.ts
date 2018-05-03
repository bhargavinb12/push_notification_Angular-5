import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
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
