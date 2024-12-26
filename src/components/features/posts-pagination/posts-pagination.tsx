import { push, RouterState } from "connected-react-router";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../redux/reducers";

export const PostsPagination: FC = () => {
  const current = 1;

  const router = useSelector<State, RouterState>((store) => store.router);
  const path = router.location.pathname ?? "/";

  const dispatch = useDispatch();

  const handleBack = () => {
    console.log("router", router);

    // path.searchParams.set("page", "2");
    // console.log("path", path);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(push(path + "?page=2") as any);
  };

  return (
    <div
      style={{
        display: "flex",
        columnGap: "0.5rem",
        alignItems: "center",
      }}
    >
      <button type="button" onClick={handleBack}>
        {"<-"}
      </button>
      <span>{current}</span>
      <button type="button">{"->"}</button>
    </div>
  );
};
