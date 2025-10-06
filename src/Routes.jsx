import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Biografia from "./pages/Biografia";
import Livros from "./pages/Livros";
import Redirect_to_Page from "./pages/Redirects";

import ErrorPage from "./pages/Error";

export default function RoutesApp({ISMOBILE}) {
    return (
        <Routes>

            <Route path="/" element={<Home ISMOBILE={ISMOBILE} />}></Route>
            <Route path="/bio" element={<Biografia ISMOBILE={ISMOBILE}  />}></Route>
            <Route path="/estante" element={<Livros ISMOBILE={ISMOBILE} />}></Route>
            <Route path="/loja/:id" element={<Redirect_to_Page />}></Route>

            <Route path="*" element={<ErrorPage />}></Route>

        </Routes>
    )
}