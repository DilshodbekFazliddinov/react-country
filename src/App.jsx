import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";

// components
import Navbar from "./components/Navbar";
import { UseFetch } from "./components/UseFetch";

function App() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");
  const [isDark, setIsDark] = useState(false);
  console.log(url);
  const { data, error, isPending } = UseFetch(url);
  return (
    <div className={`${isDark && "dark"}`}>
      <div className="App">
        <Router>
          <Navbar isDark={isDark} setIsDark={setIsDark} />

          <Routes>
            <Route
              path="/"
              element={<Home data={data} setUrl={setUrl} error={error} />}
            />
            <Route path="/about/:country" element={<About />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
