import { useState, useContext } from "react"
import CompleteOrder from "./components/Checkout/CompleteOrder"
import SelectedCoffees from "./components/Checkout/SelectedCoffees"
import { CartContext, UserDeliveryData } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export interface SubmitProps {
    onSubmit: () => void
    error: string
}

export interface UserDataProps {
    userData: UserDeliveryData
    setUserData: React.Dispatch<React.SetStateAction<UserDeliveryData>>
}

const Checkout = () => {
    const { createNewOrder } = useContext(CartContext)
    const [userData, setUserData] = useState<UserDeliveryData>({
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        uf: '',
        paymentMethod: ''
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    function onSubmit() {
        // Check if there all of the inputs are filled
        if(!userData.paymentMethod) {
            setError("Selecione o método de pagamento para prosseguir!")
        }
        const checkInputs = (): boolean => {
            for(const prop in userData) {
                if(!userData[prop as keyof UserDeliveryData]){
                    return true
                }
            }
            return false
        }
        const errorMessage = checkInputs()
        if(errorMessage) setError('Preencha os campos para prosseguir com o pedido')
        
        // If there is no error, create the order
        if(!errorMessage) {
            const orderData = createNewOrder(userData)
            if(orderData) navigate('/success')        
        } 

        // Remove the error badge in screen
        setTimeout(() => {
            setError("")
        }, 5000)
    }

    return (
        <div className="content flex gap-8">
            {/* Left */}
            <CompleteOrder userData={userData} setUserData={setUserData} />
            {/* Right */}
            <SelectedCoffees onSubmit={onSubmit} error={error} />
            
        </div>
    )
}

export default Checkout