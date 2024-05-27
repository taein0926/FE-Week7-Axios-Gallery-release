import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path= "/" element={<Main/>}/>
          <Route path= "/post/:img_id" element={<Post/>}/>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
