import { StyleSheet} from 'react-native';
import About from './pages/About';
import Home from './pages/Home';
import { NativeRouter, Route, Link, Routes } from "react-router-native";


export default function App(){
    return (
        <NativeRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </NativeRouter>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
