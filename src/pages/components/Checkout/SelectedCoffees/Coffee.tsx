import { useContext, useEffect, useState } from 'react'
import {  Trash } from 'phosphor-react';
import QuantityButton from '../../QuantityButton';
import { CoffeGalleryProps } from '../../Home/OurCoffees/CoffeeCard';
import { CartContext } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface Props {
    coffee: CoffeGalleryProps
}

const Coffee = ({coffee}: Props) => {
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate();

    useEffect(() => {
        const qty = coffee.quantity ? coffee.quantity : 1
        setQuantity(qty)
    }, [coffee.quantity])
    const { refreshCoffeeInCart, removeCoffeeFromCart } = useContext(CartContext)

    const url = window.location.pathname.split('/');
    const base_url = url[1]
    const imagePath = `/${base_url}/assets/${coffee.file}`;
    const price = coffee.quantity ? coffee.price * coffee.quantity : 0

    function handleRefreshCoffeeInCart(newQuantity: number) {
        const updatedCoffee = {
            file: coffee.file, 
            name: coffee.name, 
            type: coffee.type, 
            description: coffee.description, 
            price: coffee.price, 
            quantity: newQuantity
        }
        refreshCoffeeInCart(updatedCoffee)
    }

    function removeCoffee() {
        const updatedCart = removeCoffeeFromCart(coffee)

        // Redirect to home page if the cart is empty
        if(updatedCart.length === 0) navigate("/coffee-delivery-react-ts")
    }

    return (
        <div>
            <div className="flex justify-around align-middle">
                <div className="flex">
                    <img src={imagePath} alt="coffee image" className="w-16 h-16 ml-1 mr-5" />
                    <div>
                        <p className="text-M mb-2 text-left">{coffee.name}</p>

                        <div className="flex gap-2">
                            <QuantityButton quantity={quantity} setQuantity={setQuantity} handleRefreshCoffeeInCart={handleRefreshCoffeeInCart} />
                            <button
                                className="buttonSecondary flex gap-1"
                                onClick={removeCoffee}
                            >
                                <Trash size={18} className="text-purple my-auto" />
                                REMOVER
                            </button>
                        
                        </div>
                    </div>
                </div>

                <p className="text-M font-bold text-base-text">
                    R$ {price.toFixed(2)}
                </p>

            </div>

            <div className="bg-base-button h-px w-full my-6"></div>
        </div>

    )
}

export default Coffee