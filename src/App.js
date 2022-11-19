import './App.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Intro from "pages/Intro";

function App() {
  return (
    <BrowserRouter basename="/">
    <Routes>
        <Route exact path="/Intro" element={<Intro />} /> {/* => 인트로페이지 */}
    </Routes>
</BrowserRouter>
  );
}

export default App;
