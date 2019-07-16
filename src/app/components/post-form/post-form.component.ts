import { Post } from './../../models/Post';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost:EventEmitter<Post> = new EventEmitter();
  @Input() currentPost : Post;
  @Input() isEdit : boolean;

  constructor(private postservice : PostService) { }

  ngOnInit() {
  }
  addPost(title,body){
    if(!title || !body){
      alert('Please add the post..');
    } else {
      this.postservice.savePost({title,body} as Post).subscribe(post => { this.newPost.emit(post); })
       
    }
  }

  updatePost(){
    console.log("Update...");
  }

}
