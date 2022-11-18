import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "pages/Login";


function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Login />} /> {/* => 로그인페이지 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;