import { Minus, Plus } from 'phosphor-react'

interface QuantityButtonProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    handleRefreshCoffeeInCart?: (newQuantity: number) => void;
}

const QuantityButton = ({ quantity, setQuantity, handleRefreshCoffeeInCart }: QuantityButtonProps) => {

    const handleDecrement = () => {
        if (quantity <= 1) return
        const newValue = quantity - 1
        setQuantity(newValue)
        if(handleRefreshCoffeeInCart) {
            handleRefreshCoffeeInCart(newValue)
        } 
    }

    const handleIncrement = () => {
        const newValue = quantity + 1
        setQuantity(newValue)
        if(handleRefreshCoffeeInCart) {
            handleRefreshCoffeeInCart(newValue)
        } 
    }

    return (
        <div>
            <div className="bg-base-button rounded-md h-[38px] w-[72px] flex justify-around align-middle">
                <button onClick={handleDecrement}>
                    <Minus size={16} className="text-purple" />
                </button>
                <span className="text-base-title my-auto text-M">{quantity}</span>
                <button onClick={handleIncrement}>
                    <Plus size={16} className="text-purple" />
                </button>
            </div>
        </div>
    )
}

export default QuantityButton