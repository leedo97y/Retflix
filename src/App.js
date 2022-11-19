import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route exact path="/" element={<Main />} /> {/* => 메인페이지 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
