import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Posts } from "../../components/ui/post-list";
import { State } from "../../redux/reducers";
import { PostsState } from "../../redux/reducers/postsReducer";
import { commonStyle, ROUTES } from "../../utils/const";

export const PostList: FC = () => {
  const { posts, error, isLoading } = useSelector<State, PostsState>(
    (store) => store.posts
  );

  if (isLoading) return <div>Loading....</div>;

  return (
    <div>
      <div>Post List Page</div>
      <Link
        to={{
          pathname: ROUTES.Home,
        }}
        style={commonStyle}
      >
        Вернуться на главную
      </Link>
      {isLoading && <div style={commonStyle}>Loading....</div>}
      {!!error && <div style={commonStyle}>{error}</div>}
      {!error && !posts.length && <div style={commonStyle}>Нет данных</div>}
      {!error && !!posts.length && <Posts posts={posts} />}
    </div>
  );
};
