import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { PostList } from "./pages/post-list";
import { Home } from "./pages/home/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
