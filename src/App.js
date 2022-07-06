import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Setting from "./components/Setting";

function App() {
  localStorage.setItem("id", "mingylee");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
