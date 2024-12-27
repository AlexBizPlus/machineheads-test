import { push, RouterState } from "connected-react-router";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";
import { PostsState } from "../../../redux/reducers/postsReducer";

const FIRST_PAGE = 1;

export const PostsPagination: FC = () => {
  const router = useSelector<State, RouterState>((store) => store.router);
  const path = router.location.pathname ?? "/";

  const { current, total } = useSelector<State, PostsState["pages"]>(
    (store) => store.posts.pages
  );

  const dispatch = useDispatch();

  if (!current || !total) return null;

  const handleBack = () => {
    const prevPage = current - 1;
    if (prevPage < FIRST_PAGE) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(push(path + "?page=" + prevPage) as any);
  };

  const handleForward = () => {
    const nextPage = current + 1;
    if (nextPage > total) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(push(     path + "?page=" + nextPage) as any);
  };

  return (
    <div
      style={{
        display: "flex",
        columnGap: "0.5rem",
        alignItems: "center",
      }}
    >
      <button
        type="button"
        onClick={handleBack}
        disabled={current === FIRST_PAGE}
      >
        {"<-"}
      </button>
      <span>{current}</span>
      <button
        type="button"
        onClick={handleForward}
        disabled={current === total}
      >
        {"->"}
      </button>
    </div>
  );
};
