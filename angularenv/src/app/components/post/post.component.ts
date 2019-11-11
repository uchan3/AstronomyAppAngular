import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/classes/Post';
import { PostService } from 'src/app/services/post.service';
import { Catalog } from 'src/app/classes/Catalog';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() CatalogID: string; //Input from Catalog into Post
  
  AllPostList: Post[];
  PostList: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPostList(this.CatalogID);
  }

  getAllPost(): void {
    this.postService.getPostList().subscribe( allposts => {this.AllPostList = allposts});
  }
  
  //CONFIRMED: Can bind from CatalogID input into the PostList. 
  getPostList(NGCID: string) : void {
     this.postService.getTargetPostList(NGCID).subscribe( postList => { this.PostList = postList});
  }

  //Parameters: PostID, Title, Description, URL, UserID
  addPost(PostingID: string, PostTitle: string, PostDescription: string, PostURL: string, PostUserID: string) : void {
    let incomingPost : Post = 
    {
      PostId: PostingID, 
      title: PostTitle, 
      description: PostDescription, 
      url: PostURL, 
      UserId: PostUserID,
      CatalogId: this.CatalogID,
      id: this.AllPostList.length + 1 //ID Generation
    };
    console.log(incomingPost);
    this.postService.postPost(incomingPost).subscribe( newPost => { this.PostList.push(newPost)});
  };

  //Update a post by PostID, with an extra description: 
  updatePost(PostID: string, PostDescription: string) : void
  {
    var postInfo = this.PostList.find( postid => postid.PostId == PostID);
    postInfo.description  = PostDescription; //Update with new description. 

    this.postService.putPost(postInfo).subscribe ( updatePostList => { this.getPostList(this.CatalogID)});  
  };

  //Delete a post by DBID, based on PostID. 
  deletePost (PostID: string) : void 
  {
    let id = this.PostList.findIndex( deletePostID => deletePostID.PostId == PostID ) +1;
    console.log(id);
    this.postService.deletePost(id).subscribe ( deletePostList => { this.getPostList(this.CatalogID)});
  }

}
