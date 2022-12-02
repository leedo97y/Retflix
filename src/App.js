import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';
import Intro from 'pages/Intro';
import Video from 'pages/Video';
import { useEffect } from 'react';
import MoveProfile from 'pages/MoveProfile';


function App() {
    let token;
    useEffect(() => {
        token = sessionStorage.getItem("user");

    }, [token])

    return (
        <BrowserRouter basename="/">
            <Routes>
                {token ?
                    (<Route exact path="/" element={<Main />} />)

                    :
                    (<Route exact path="/" element={<Intro />} />)
                }

                <Route path="/login" element={<Login />} /> {/* => 로그인페이지 */}
                <Route path="/intro" element={<Intro />} /> {/* => intro 페이지 */}
                <Route path="/video" element={<Video />} /> {/* => video 페이지 */}
                <Route path="/moveProfile" element={<MoveProfile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
