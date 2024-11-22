import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SplashScreen from "./screen/splash/SplashScreen";
import EntryScreen from "./screen/entry/EntryScreen";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EntryScreen />}/>
                    <Route path="/splash" element={<SplashScreen />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
