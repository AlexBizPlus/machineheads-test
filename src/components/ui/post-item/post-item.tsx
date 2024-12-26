import { FC } from "react";
import { PostRes } from "../../../types";
import { commonStyle } from "../../../utils/const";

type PostItemProps = PostRes;

export const PostItem: FC<PostItemProps> = (props) => {
  const { id, title, authorName } = props;

  return (
    <li style={commonStyle}>
      <div>id: {id}</div>
      <div>title: {title}</div>
      <div style={{ fontStyle: "italic" }}>authorName: {authorName}</div>
    </li>
  );
};
