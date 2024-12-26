import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/reducers";
import { commonStyle, ROUTES } from "../../utils/const";
import { Link } from "react-router-dom";
import { clearAuth } from "../../redux/actions/authActions";
import { AuthState } from "../../redux/reducers/authReducer";

export const Home: FC = () => {
  const isAuth = useSelector<State, AuthState["isAuth"]>(
    (store) => store.auth.isAuth
  );
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(clearAuth());

  return (
    <div>
      <div>Home Page</div>
      <div style={commonStyle}>Вы {!isAuth && "не"} авторизованы</div>
      {isAuth ? (
        <>
          <Link
            to={{
              pathname: ROUTES.Posts,
            }}
            style={commonStyle}
          >
            Список постов
          </Link>
          <button style={commonStyle} onClick={handleLogout}>
            Выйти
          </button>
        </>
      ) : (
        <Link
          to={{
            pathname: ROUTES.Login,
          }}
          style={commonStyle}
        >
          Войти
        </Link>
      )}
    </div>
  );
};
