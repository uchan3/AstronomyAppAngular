import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/classes/Post';
import { PostService } from 'src/app/services/post.service';
import { Catalog } from 'src/app/classes/Catalog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() CatalogID: string; //Input from Catalog into Post
  
  PostList: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList(this.CatalogID);
  }

  // getPostList() : void {
  //   this.postService.getPostList().subscribe( postList => this.PostList = postList);
  // }
  //TODO: continue research on how to bind Catalog ID and get list of posts.
  getPostList(NGCID: string) : void {
     this.postService.getTargetPostList(NGCID).subscribe( postList => { this.PostList = postList});
  }

}
