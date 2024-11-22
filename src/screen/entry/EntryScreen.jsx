import {useEffect, useState} from "react";
import SplashScreen from "../splash/SplashScreen";
import HomeScreen from "../home/HomeScreen";
import "./EntryScreen.css"

const EntryScreen = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2000ms = 2초
        return () => clearTimeout(timer);
    }, []);

    return <div className="EntryScreen">
        {
            isLoading
                ? <SplashScreen />
                : <HomeScreen />
        }
    </div>
}

export default EntryScreen;