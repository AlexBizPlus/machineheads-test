import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { PostList } from "./pages/post-list";
import { Home } from "./pages/home/home";
import { NoMatch } from "./pages/no-match/no-match";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={PostList} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
