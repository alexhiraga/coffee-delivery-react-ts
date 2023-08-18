import { useContext, useEffect, useState } from 'react'
import Coffee from './SelectedCoffees/Coffee'
import { CartContext } from '../../../context/CartContext'
import { SubmitProps } from '../../Checkout'

// const mock: CoffeGalleryProps[] = [
//     { file: 'Type=Americano.png', name: 'Expresso Americano', type:['TRADICIONAL'], description:"Expresso diluído, menos intenso que o tradicional", price: 9.90, quantity: 1},
//     { file: 'Type=Árabe.png', name: 'Árabe', type:['ESPECIAL'], description:"Bebida preparada com grãos de café árabe e especiarias", price: 9.90, quantity: 2},
// ]

const SelectedCoffees = ({ onSubmit, error }: SubmitProps) => {
    const { coffeeCart } = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        let totalSum = 0
        coffeeCart.forEach(item => {
            if(item.quantity) {
                totalSum += item.price * item.quantity
            }
        })
        setTotalPrice(totalSum)
        
    }, [coffeeCart])

    const deliveryTax = 3.5
    const priceWithTax = deliveryTax + totalPrice

    function handleSubmit() {
        onSubmit()
    }

    return (
        <div className="min-w-[448px] mt-10">
            <h5 className="text-left">Cafés selecionados</h5>
                {/* Selected coffee list */}
                <div className=" bg-base-card rounded-t-md rounded-tr-[36px] rounded-b-md rounded-bl-[36px] mt-4 p-10">
                    {coffeeCart.map((coffee) => (
                        <Coffee coffee={coffee} key={coffee.file} />
                    ))}

                    {/* Total */}
                    <div className='flex justify-between mb-3'>
                        <p className="text-S text-base-text">Total de itens</p>
                        <p className="text-M text-base-text">R$ {totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <p className="text-S text-base-text">Entrega</p>
                        <p className="text-M text-base-text">R$ {deliveryTax.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between mb-6'>
                        <p className="text-L font-bold ">Total</p>
                        <p className="text-M">R$ {priceWithTax.toFixed(2)}</p>
                    </div>

                    <button className="buttonPrimary w-full" onClick={handleSubmit}>
                        CONFIRMAR PEDIDO
                    </button>

                    {error && (
                        <p className="w-full py-6 bg-red-200 mt-3 px-4 rounded-md">
                            {error}
                        </p>
                    )}
                </div>

        </div>
    )
}

export default SelectedCoffees