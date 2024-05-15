import { Link, Route, Routes } from "react-router-dom";
import LoginButton from "./components/auth/LoginButton";
import LogoutButton from "./components/auth/LogoutButton";
import Challenges from "./components/Challenges";
import PrivateRoute from "./components/auth/PrivateRoute";
import About from "./components/About";
import HomePage from "./components/HomePage";


function App() {
  return (
    <main>
      <header>
        <h2> OAuth Demo</h2>
      </header>

      <article>
        <span>
          <LoginButton />
          <LogoutButton />
        </span>
        <Routes>
          <Route path="/challenges" element={<PrivateRoute component={<Challenges />} />} />
          <Route path="/about" element={<About />} />
          <Route path="" element={<HomePage />} />
        </Routes>
      </article>
    </main>

  );
}

export default App;
