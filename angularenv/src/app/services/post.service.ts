import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../classes/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private postURL = 'api/PostList'; //URL

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type': 'application/json',}
    )};
  
  //GET: all posts.
  getPostList() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postURL);
  }
  
  //GET: all posts by CatalogID. 
  getTargetPostList(catalogId: string) : Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postURL}?CatalogId=${catalogId}`);
  }
  
  //POST: add new post.
  postPost(post: Post) : Observable<Post> {
    return this.http.post<Post>(this.postURL, post, this.httpOptions);
  }

  //PUT: update specific post. 
  putPost(post: Post) : Observable<Post> {
    return this.http.put<Post>(`${this.postURL}/${post.id}`, post, this.httpOptions);
  }

  //DELETE: remove post. 
  deletePost(POSTID: number) : Observable<Post> {
    return this.http.delete<Post>(`${this.postURL}/${POSTID}`, this.httpOptions);
  }
}
