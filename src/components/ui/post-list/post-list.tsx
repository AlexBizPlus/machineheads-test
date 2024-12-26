import { FC } from "react";
import { PostRes } from "../../../types";
import { PostItem } from "../post-item";

interface PostsProps {
  posts: PostRes[];
}

export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </ul>
  );
};
