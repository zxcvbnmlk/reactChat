import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Search from "../search/search";
import Chat from "../chat/chat";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/search" element={<Search />} />
        </Routes>

    );
}
