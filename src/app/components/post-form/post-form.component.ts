import { Post } from './../../models/Post';
import { Component, OnInit } from '@angular/core';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postservice : PostService) { }

  ngOnInit() {
  }
  addPost(title,body){
    if(!title || !body){
      alert('Please add the post..');
    } else {
     this.postservice.savePost({title,body} as Post).subscribe(post => { console.log(post); })
    }
  }

}