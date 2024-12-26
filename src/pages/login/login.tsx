import { FC } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/actions/authActions";
import { commonStyle } from "../../utils/const";

export const Login: FC = () => {
  const dispatch = useDispatch();

  function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    dispatch(loginRequest.call(null, { email, password }));
  }

  return (
    <div>
      <form onSubmit={login} autoComplete="none">
        <input
          type="text"
          name="email"
          id="email"
          defaultValue={import.meta.env.VITE_EMAIL ?? ""}
          required
          autoComplete="new-email"
          style={commonStyle}
        />
        <input
          type="password"
          name="password"
          id="password"
          required
          defaultValue={import.meta.env.VITE_PASSWORD ?? ""}
          autoComplete="new-password"
          style={commonStyle}
        />
        <button style={commonStyle} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
