import { MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import Illustration from '../assets/Illustration.svg'
import { CartContext } from '../context/CartContext'


const Success = () => {
    const { userData } = useContext(CartContext)
    return (
        <div className="content">
            <h2 className="text-yellow-dark text-left mt-20">
                Uhu! Pedido confirmado
            </h2>
            <p className="text-L text-base-subtitle mt-1 mb-10 text-left">
                Agora é só aguardar que logo o café chegará até você
            </p>

            <div className="flex justify-between">
                {/* Left */}
                <div className="min-w-[526px] borderGradient flex flex-col gap-8">
                    <div className="flex text-left gap-3 align-middle">
                        <div className="rounded-full bg-purple w-8 h-8 flex flex-col justify-center my-auto">
                            <MapPin size={20} className="text-white m-auto" />
                        </div>
                        <div className="text-base-text">
                            {userData && (
                                <>
                                    <p>Entrega em <span className="font-bold">{userData.street}, {userData.number}</span></p>
                                    <p>{userData.district} - {userData.city}, {userData.uf}</p>
                                </>     
                            )}
                        </div>
                    </div>

                    <div className="flex text-left gap-3 align-middle">
                        <div className="rounded-full bg-yellow w-8 h-8 flex flex-col justify-center my-auto">
                            <Timer size={20} className="text-white m-auto" />
                        </div>
                        <div className="text-base-text">
                            <p>Previsão de entrega</p>
                            <p className="font-bold">20 min - 30 min</p>
                        </div>
                    </div>
                    
                    <div className="flex text-left gap-3 align-middle">
                        <div className="rounded-full bg-yellow-dark w-8 h-8 flex flex-col justify-center my-auto">
                            <Timer size={20} className="text-white m-auto" />
                        </div>
                        <div className="text-base-text">
                            <p>Pagamento na entrega</p>
                            <p className="font-bold">Cartão de Crédito</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <img src={Illustration} alt="motoboy" className="max-w-[492px]" />

                <div>

                </div>
            </div>
        </div>
    )
}

export default Success