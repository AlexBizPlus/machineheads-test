import { ConnectedRouter } from "connected-react-router/immutable";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NoMatch } from "./pages/no-match";
import { PostList } from "./pages/post-list";
import store, { history } from "./redux/store";
import { ROUTES } from "./utils/const";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={ROUTES.Home} component={Home} />
          <Route path={ROUTES.Login} component={Login} />
          <Route path={ROUTES.Posts} component={PostList} />
          <Route component={NoMatch} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
