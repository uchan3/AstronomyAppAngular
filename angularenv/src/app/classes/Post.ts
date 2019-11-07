export class Post {
  PostId: string;
  title: string;
  description: string;
  url: string;

  //Foreign keys
  UserId: string;
  CatalogId: string;
}