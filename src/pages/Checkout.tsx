import { useState, useContext } from "react"
import SelectedCoffees from "./components/Checkout/SelectedCoffees"
import { CartContext, UserDeliveryData } from "../context/CartContext"
import { useNavigate } from "react-router-dom"
import { Controller, useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import * as RadioGroup from "@radix-ui/react-radio-group"

export interface SubmitProps {
    submitOrder: () => void
    error: string
}

export interface UserDataProps {
    userData: UserDeliveryData
    setUserData: React.Dispatch<React.SetStateAction<UserDeliveryData>>
}

const searchFormSchema = z.object({
    cep: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    district: z.string(),
    city: z.string(),
    uf: z.string(),
    paymentMethod: z.enum(['creditCard', 'debitCard', 'money'])
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const Checkout = () => {

    const { 
        control,
        register, 
        handleSubmit, 
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
        defaultValues: {
            paymentMethod: 'money'
        }
    })

    function handleSubmitOrder(data: SearchFormInputs) {
        // Check if there all of the inputs are filled
        if(!data.paymentMethod) {
            setError("Selecione o método de pagamento para prosseguir!")
        }
        const checkInputs = (): boolean => {
            for(const prop in data) {
                if(!data[prop as keyof UserDeliveryData]){
                    return true
                }
            }
            return false
        }
        const errorMessage = checkInputs()
        if(errorMessage) setError('Preencha os campos para prosseguir com o pedido')
        
        // If there is no error, create the order
        if(!errorMessage) {
            const orderData = createNewOrder(data)
            if(orderData) navigate('/success')        
        } 

        // Remove the error badge in screen
        setTimeout(() => {
            setError("")
        }, 5000)
    }

    const { createNewOrder } = useContext(CartContext)
    
    const [error, setError] = useState("")
    const navigate = useNavigate();

    return (
        <div className="content flex gap-8">
            {/* Left */}
            <div className="min-w-[640px] mt-10">
                <h5 className="text-left">Complete seu pedido</h5>
                <div className=" bg-base-card rounded-md mt-4 p-10">
                    <div className="flex mb-8">
                        <MapPinLine size={22} className="text-yellow-dark" />
                        <div className="ml-2 text-left">
                            <p className="text-M">Endereço de Entrega</p>
                            <p className="text-S">Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(handleSubmitOrder)}>
                        <input type="text" placeholder="CEP" className="w-1/3 float-left mb-4" 
                            {...register('cep')}
                        />
                        <input type="text" placeholder="Rua" className="w-full mb-4" 
                            {...register('street')}
                        />
                        <div className="flex gap-3 mb-4">
                            <input type="text" placeholder="Número" className="w-1/3" 
                                {...register('number')}
                            />
                            <input type="text" placeholder="Complemento" className="w-2/3" 
                                {...register('complement')}
                            />
                        </div>
                        <div className="flex gap-3 mb-4">
                            <input type="text" placeholder="Bairro" className="w-2/6" 
                                {...register('district')}
                            />
                            <input type="text" placeholder="Cidade" className="w-3/6" 
                                {...register('city')}
                            />
                            <input type="text" placeholder="UF" className="w-1/6" 
                                {...register('uf')}
                            />
                        </div>
                    </form>
                </div>

                <div className=" bg-base-card rounded-md mt-3 p-10">
                    <div className="flex mb-8">
                        <CurrencyDollar size={22} className="text-purple" />
                        <div className="ml-2 text-left">
                            <p className="text-base-subtitle text-M">Pagamento</p>
                            <p className="text-base-text text-S">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>

                    <Controller 
                        control={control}
                        name="paymentMethod"
                        render={({ field }) => {
                            return (
                                <RadioGroup.Root className="grid grid-cols-3 gap-3" onValueChange={field.onChange} value={field.value}>
                                    <RadioGroup.Item 
                                        className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                                        value="creditCard"
                                    >
                                        <CreditCard size={18} className="text-purple" />
                                        <span className="button-M">CARTÃO DE CRÉDITO</span>
                                    </RadioGroup.Item>

                                    <RadioGroup.Item 
                                        className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                                        value="debitCard"
                                    >
                                        <Bank size={18} className="text-purple" />
                                        <span className="button-M">CARTÃO DE DÉBITO</span>
                                    </RadioGroup.Item>

                                    <RadioGroup.Item 
                                        className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                                        value="money"
                                    >
                                        <Money size={18} className="text-purple" />
                                        <span className="button-M">DINHEIRO</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>
                            )
                        }}  
                    />
                    
                    
                </div>
            </div>
            {/* Right */}
            <SelectedCoffees submitOrder={handleSubmit(handleSubmitOrder)} error={error} />
            
        </div>
    )
}

export default Checkout
