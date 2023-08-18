import { ShoppingCart } from 'phosphor-react';
import QuantityButton from '../../QuantityButton';
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../context/CartContext';
export interface CoffeGalleryProps {
    file: string;
    name: string;
    type: string[];
    description: string;
    price: number;
    quantity?: number | undefined;
}

const CoffeeCard = ({file, name, type, description, price}: CoffeGalleryProps) => {
    const imagePath = `../../../../../assets/${file}`;

    const [coffeePrice, setCoffeePrice] = useState(9.9)
    const [quantity, setQuantity] = useState(1)
    const { addCoffeeToCart } = useContext(CartContext)

    useEffect(() => {
        setCoffeePrice(quantity * price)
    }, [price, quantity])

    function handleAddCoffeeToCart() {
        const coffee = {
            file, name, type, description, price, quantity
        }
        addCoffeeToCart(coffee)
    }

    return (
        <div className="w-64 h-[310px] bg-base-card rounded-t-md rounded-tr-[36px] rounded-b-md rounded-bl-[36px] mb-10 p-5">
            <img 
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                src={imagePath} alt={name}
                className="w-[120px] mx-auto -mt-10"
            />

            {/* Coffee type */}
            <div className="flex mx-auto justify-center mt-3 mb-4 gap-1">
                {type && type.map((type) => (
                    <div className="text-yellow-dark py-1 px-2 rounded-full bg-yellow-light tag">
                        {type}
                    </div>
                ))}
            </div>

            {/* Name */}
            <h4>{name}</h4>

            {/* Description */}
            <p className="mt-2 mb-[33px] text-S">
                {description}
            </p>

            {/* Price and buttons */}
            <div className="flex justify-around mb-5 align-middle">
                <div className="text-S flex my-auto">
                    <span className="my-auto mr-1">R$</span>
                    <h3>{coffeePrice.toFixed(2)}</h3>
                </div>

                <QuantityButton quantity={quantity} setQuantity={setQuantity} />

                <button
                    className="bg-purple-dark rounded-md h-[38px] w-[38px] text-white hover:bg-purple"
                    onClick={handleAddCoffeeToCart}
                >
                    <ShoppingCart size={22} className="m-auto" />
                </button>
            </div>

        </div>
    )
}

export default CoffeeCard