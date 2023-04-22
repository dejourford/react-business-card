import Header from "./components/Header/Header"
import About from "./components/About/About"
import Interests from "./components/Interests/Interests"
import Footer from "./components/Footer/Footer"
import "./App.css"


export default function App() {

    return (
        <div className="container">
            <Header />
            <About />
            <Interests />
            <Footer />
        </div>
    );
};