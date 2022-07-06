import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";

function App() {
  localStorage.setItem("id", "mingylee");
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
