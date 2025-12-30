import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectPage from "./ClassifyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/classify" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
