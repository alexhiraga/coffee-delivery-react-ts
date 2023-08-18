import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { UserDataProps } from '../../Checkout'

const CompleteOrder = ({ userData, setUserData}: UserDataProps) => {

    const [paymentMethod, setPaymentMethod] = useState("")
    
    const getBackgroundColor = (method:string, type:string) => {
        if(method === paymentMethod) {
            if(type === 'bg') return '#EBE5F9'
            if(type === 'border') return 'solid 1px #8047F8'
        }
        return ''
    }

    useEffect(() => {
        setUserData((prevUserData) => ({
            ...prevUserData,
            paymentMethod: paymentMethod
        }))
    }, [paymentMethod, setUserData])


    return (
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

                    <form>
                        <input type="text" placeholder="CEP" className="w-1/3 float-left mb-4" 
                            onChange={(e) => 
                                setUserData((prevUserData) => ({
                                    ...prevUserData,
                                    cep: e.target.value
                                })
                            )} 
                            value={userData.cep}
                        />
                        <input type="text" placeholder="Rua" className="w-full mb-4" 
                            onChange={(e) => 
                                setUserData((prevUserData) => ({
                                    ...prevUserData,
                                    street: e.target.value
                                })
                            )} 
                            value={userData.street}
                        />
                        <div className="flex gap-3 mb-4">
                            <input type="text" placeholder="Número" className="w-1/3" 
                                onChange={(e) => 
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        number: e.target.value
                                    })
                                )} 
                                value={userData.number}
                            />
                            <input type="text" placeholder="Complemento" className="w-2/3" 
                                onChange={(e) => 
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        complement: e.target.value
                                    })
                                )} 
                                value={userData.complement}
                            />
                        </div>
                        <div className="flex gap-3 mb-4">
                            <input type="text" placeholder="Bairro" className="w-2/6" 
                                onChange={(e) => 
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        district: e.target.value
                                    })
                                )} 
                                value={userData.district}
                            />
                            <input type="text" placeholder="Cidade" className="w-3/6" 
                                onChange={(e) => 
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        city: e.target.value
                                    })
                                )} 
                                value={userData.city}
                            />
                            <input type="text" placeholder="UF" className="w-1/6" 
                                onChange={(e) => 
                                    setUserData((prevUserData) => ({
                                        ...prevUserData,
                                        uf: e.target.value
                                    })
                                )} 
                                value={userData.uf}
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

                    <div className="grid grid-cols-3 gap-3">
                        <div 
                            className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                            style={{ 
                                backgroundColor: getBackgroundColor('creditCard', 'bg'),
                                outline: getBackgroundColor('creditCard', 'border') 
                            }}
                            onClick={() => setPaymentMethod('creditCard')}
                        >
                            <CreditCard size={18} className="text-purple" />
                            <span className="button-M">CARTÃO DE CRÉDITO</span>
                        </div>

                        <div 
                            className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                            style={{ 
                                backgroundColor: getBackgroundColor('debitCard', 'bg'),
                                outline: getBackgroundColor('debitCard', 'border') 
                            }}
                            onClick={() => setPaymentMethod('debitCard')}
                        >
                            <Bank size={18} className="text-purple" />
                            <span className="button-M">CARTÃO DE DÉBITO</span>
                        </div>

                        <div 
                            className="rounded-md bg-base-button flex justify-center gap-3 p-4 cursor-pointer hover:bg-base-hover transition-colors"
                            style={{ 
                                backgroundColor: getBackgroundColor('money', 'bg'),
                                outline: getBackgroundColor('money', 'border') 
                            }}
                            onClick={() => setPaymentMethod('money')}
                        >
                            <Money size={18} className="text-purple" />
                            <span className="button-M">DINHEIRO</span>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}

export default CompleteOrder