import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/classes/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() CatalogID: string; //Input from Catalog Component into Post Component
  
  AllPostList: Post[]; //Need as a reference for generating IDs for the Post.
  PostList: Post[];
  postEntry: Post =
  {
    id: null,
    PostId: null,
    title: null, 
    description: null, 
    url: null, 
    UserId: null, 
    CatalogId: null,
  };
  
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPost(); //This must be loaded in order to generate IDs. 
    this.getPostList(this.CatalogID);
  }

  getAllPost(): void {
    this.postService.getPostList().subscribe( allposts => {this.AllPostList = allposts;});
  }
  
  //CONFIRMED: Can bind from CatalogID input into the PostList. 
  getPostList(NGCID: string) : void {
     this.postService.getTargetPostList(NGCID).subscribe( 
       postList => 
       { this.PostList = postList;
         //console.log("The length of the array is " + this.PostList.length);
         //console.log("The length of the total post array is " + this.AllPostList.length);
        });
  }

  //Parameters: add Post Form
  addPost(newPostEntry: Post) : void {

    newPostEntry.CatalogId= this.CatalogID;
    console.log(newPostEntry.CatalogId);
    newPostEntry.id = this.AllPostList.length + 1; 
    console.log(newPostEntry.id);

    console.log(newPostEntry);
    this.postService.postPost(newPostEntry).subscribe( newPost => { this.PostList.push(newPost)});
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
    let id: number = this.AllPostList.findIndex( deletePostID => deletePostID.PostId == PostID ) +1;
    console.log(id);
    this.postService.deletePost(id).subscribe ( deletePostList => { this.getPostList(this.CatalogID)});
  }

}
