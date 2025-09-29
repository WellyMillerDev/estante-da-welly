import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";

export default function RoutesApp() {
    return (
        <Routes>

            <Route path="/" element={<Home />}></Route>

        </Routes>
    )
}