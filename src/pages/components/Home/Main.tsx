import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import MainImage from '../../../assets/Coffee-main-image.png'


const Main = () => {
    return (
        <div className="bg-main-bg bg-cover bg-center bg-no-repeat min-h-[544px] flex flex-col justify-center">
            <div className="flex content gap-14">
                {/* Left */}
                <div className="text-left max-w-[588px]">
                    <h1 className="mb-4">Encontre o café perfeito para qualquer hora do dia</h1>
                    <p className="text-L mb-16">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <div className="flex gap-10">
                        <div className="flex gap-3">
                            <div className="rounded-full w-8 h-8 bg-yellow-dark flex flex-col justify-center">
                                <ShoppingCart size={18} className="text-white text-center mx-auto" />
                            </div>
                            <p className="text-M my-auto">Compra simples e segura</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="rounded-full w-8 h-8 bg-base-text flex flex-col justify-center">
                                <Package size={18} className="text-white text-center mx-auto" />
                            </div>
                            <p className="text-M my-auto">Embalagem mantém o café intacto</p>
                        </div>
                    </div>
                    <div className="flex gap-10 mt-5">
                        <div className="flex gap-3">
                            <div className="rounded-full w-8 h-8 bg-yellow flex flex-col justify-center">
                                <Timer size={18} className="text-white text-center mx-auto" />
                            </div>
                            <p className="text-M my-auto">Compra simples e segura</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="rounded-full w-8 h-8 bg-purple flex flex-col justify-center">
                                <Coffee size={18} className="text-white text-center mx-auto" />
                            </div>
                            <p className="text-M my-auto">Embalagem mantém o café intacto</p>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div>
                    <img src={MainImage} alt="main image" className="min-w-max" />
                </div>
            </div>    

        </div>
    )
}

export default Main