import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/login";
import { PostList } from "./pages/post-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
