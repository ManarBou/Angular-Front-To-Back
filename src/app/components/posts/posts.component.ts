import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[];

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(posts => {
      this.posts = posts;
    })
  }

  onNewPost(post : Post){
    this.posts.unshift(post);
  }

}
