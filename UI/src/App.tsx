import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./_routes/appRouter";
import Header from "./_components/header/header.tsx";
import './App.scss'

export default function App() {
    return (
        <Router>
            <Header />
            <div className="content">
                <AppRouter />
            </div>
        </Router>
    );
}

