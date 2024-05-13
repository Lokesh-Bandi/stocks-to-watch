export interface SampleType {
  playersCount: number;
  countriesCount: number;
  isPlayerActive: boolean;
  appName: string;
  posts: Post[] | null;
}
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
