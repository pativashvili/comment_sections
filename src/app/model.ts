export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface UsersComments {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Replys[];
}
export type Replys = Omit<UsersComments, 'replies'> & { replyingTo: string };

export interface Data {
  currentUser: User;
  comments: UsersComments[];
}
