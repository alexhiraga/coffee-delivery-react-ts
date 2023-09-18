import CoffeeCard from './OurCoffees/CoffeeCard'

const OurCoffees = () => {

    const images = [
        { file: 'Americano.png', name: 'Expresso Americano', type:['TRADICIONAL'], description:"Expresso diluído, menos intenso que o tradicional", price: 9.90},
        { file: 'Arabe.png', name: 'Árabe', type:['ESPECIAL'], description:"Bebida preparada com grãos de café árabe e especiarias", price: 9.90},
        { file: 'Cafe-com-leite.png', name: 'Café com Leite', type:['TRADICIONAL', 'COM LEITE'], description:"Meio a meio de expresso tradicional com leite vaporizado", price: 9.90},
        { file: 'Cafe-gelado.png', name: 'Expresso Gelado', type:['TRADICIONAL', 'GELADO'], description:"Bebida preparada com café expresso e cubos de gelo", price: 9.90},
        { file: 'Capuccino.png', name: 'Capuccino', type:['TRADICIONAL', 'COM LEITE'], description:"Bebida com canela feita de doses iguais de café, leite e espuma", price: 9.90},
        { file: 'Chocolate-quente.png', name: 'Chocolate Quente', type:['ESPECIAL', 'COM LEITE'], description:"Bebida feita com chocolate dissolvido no leite quente e café", price: 9.90},
        { file: 'Cubano.png', name: 'Cubano', type:['ESPECIAL', 'ALCOÓLICO', 'GELADO'], description:"Drink gelado de café expresso com rum, creme de leite e hortelã", price: 9.90},
        { file: 'Expresso-cremoso.png', name: 'Expresso Cremoso', type:['TRADICIONAL'], description:"Café expresso tradicional com espuma cremosa", price: 9.90},
        { file: 'Expresso.png', name: 'Expresso Tradicional', type:['TRADICIONAL'], description:"O tradicional café feito com água quente e grãos moídos", price: 9.90},
        { file: 'Havaiano.png', name: 'Havaiano', type:['ESPECIAL'], description:"Bebida adocicada preparada com café e leite de coco", price: 9.90},
        { file: 'Irlandes.png', name: 'Irlandês', type:['ESPECIAL', 'ALCOÓLICO'], description:"Bebida a base de café, uísque irlandês, açúcar e chantilly", price: 9.90},
        { file: 'Latte.png', name: 'Latte', type:['TRADICIONAL', 'COM LEITE'], description:"Uma dose de café expresso com o dobro de leite e espuma cremosa", price: 9.90},
        { file: 'Macchiato.png', name: 'Macchiato', type:['TRADICIONAL', 'COM LEITE'], description:"Café expresso misturado com um pouco de leite quente e espuma", price: 9.90},
        { file: 'Mochaccino.png', name: 'Mocaccino', type:['TRADICIONAL', 'COM LEITE'], description:"Café expresso com calda de chocolate, pouco leite e espuma", price: 9.90},
    ]
    
    return (
        <div className="content">
            <h2 className="my-8 text-left">Nossos cafés</h2>
            <div className="grid grid-cols-4">
                {images.map((image, index) => (
                    <CoffeeCard key={index} 
                        file={image.file}
                        name={image.name}
                        type={image.type}
                        description={image.description}
                        price={image.price}
                    />
                ))}
            </div>

        </div>
    )
}

export default OurCoffees