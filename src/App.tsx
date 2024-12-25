import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NoMatch } from "./pages/no-match";
import { PostList } from "./pages/post-list";
import { history } from "./redux/reducers";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/posts" component={PostList} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
