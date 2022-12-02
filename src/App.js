import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Intro from 'pages/Intro';
import MoveProfile from 'pages/MoveProfile';

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path="/" element={<Main />} /> {/* => 메인페이지 */}
                <Route path="/login" element={<Login />} /> {/* => 로그인페이지 */}
                <Route path="/intro" element={<Intro />} /> {/* => intro 페이지 */}
                <Route path="/moveProfile" element={<MoveProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
