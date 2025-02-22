import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    );
}