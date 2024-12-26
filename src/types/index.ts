export interface Credentials {
  email: string;
  password: string;
}

export interface PostRes {
  id: number;
  title: string;
  code: string;
  authorName: string;
  previewPicture: {
    id: number;
    name: string;
    url: string;
  };
  tagNames: string[];
  updatedAt: string;
  createdAt: string;
}
