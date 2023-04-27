import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Record } from "./Components/Record";
import { Articles } from "./Components/Articles";
import { Article } from "./Components/Article";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/record" element={<Record />} />
        <Route path="/articles" element={<Articles />}>
          <Route path=":id" element={<Article />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
