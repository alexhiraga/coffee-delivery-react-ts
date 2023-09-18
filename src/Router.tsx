import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export function Router() {
    return (
        <Routes>
            <Route path="/coffee-delivery-react-ts" element={ <Home /> } />
            <Route path="/coffee-delivery-react-ts/checkout" element={ <Checkout /> } />
            <Route path="/coffee-delivery-react-ts/success" element={ <Success /> } />
        </Routes>
    );
}