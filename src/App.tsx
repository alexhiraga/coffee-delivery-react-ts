import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import Navbar from "./pages/components/Navbar"
import { CartContextProvider } from "./context/CartContext"

function App() {

    return (
        <>
            <div className="text-center mx-auto">
                <CartContextProvider>
                    <BrowserRouter>
                        <Navbar />
                        <Router />
                    </BrowserRouter>
                </CartContextProvider>
            </div>
        </>
    )
}

export default App
