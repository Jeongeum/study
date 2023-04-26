import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Menu1 } from "./Components/Menu1";
import { Menu2 } from "./Components/Menu2";
import { Header } from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/menu1" Component={Menu1} />
        <Route path="/menu2" Component={Menu2} />
      </Routes>
    </div>
  );
}
export default App;
