import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/LogoCoffeeDelivery.svg'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Navbar = () => {
    const { coffeeCart } = useContext(CartContext)

    const coffeeQuantity = coffeeCart ? coffeeCart.length : 0

    return (
        <div className="h-28 flex justify-between content">
            <a href="/" className="my-auto">
                <img src={Logo} className="w-[85px]" />
            </a>
            <div className="flex gap-2">
                <div className="bg-purple-light p-2 flex items-center text-purple-dark rounded-md my-auto text-S gap-1">
                    <MapPin size={22} />
                    Maringá, PR
                </div>

                <a href={coffeeQuantity > 0 ? '/coffee-delivery-react-ts/checkout' : '/coffee-delivery-react-ts'} className="p-2 bg-yellow-light text-yellow-dark my-auto rounded-md relative hover:text-yellow-dark">
                    <ShoppingCart size={22} />
                    {coffeeQuantity > 0 && (
                        <div className="rounded-full w-5 h-5 bg-yellow-dark absolute -top-2 -right-2 text-white text-XS font-bold flex flex-col justify-center">
                            {coffeeQuantity}
                        </div>
                    )}
                </a>

            </div>
        </div>
    )
}

export default Navbar