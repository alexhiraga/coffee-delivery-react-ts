import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeGalleryProps } from "../pages/components/Home/OurCoffees/CoffeeCard";

export interface UserDeliveryData {
    cep: string
    street: string
    number: string
    complement?: string
    district: string
    city: string
    uf: string
    // paymentMethod: 'creditCard' | 'debitCard' | 'money'
    paymentMethod: string
}

interface CartContextType {
    coffeeCart: CoffeGalleryProps[]
    userData: UserDeliveryData | null
    createNewOrder: (data: UserDeliveryData) => UserDeliveryData | null
    addCoffeeToCart: (coffee: CoffeGalleryProps) => void
    refreshCoffeeInCart: (coffee: CoffeGalleryProps) => void
    removeCoffeeFromCart: (coffee: CoffeGalleryProps) => CoffeGalleryProps[]
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [coffeeCart, setCoffeeCart] = useState<CoffeGalleryProps[]>([])
    const [userData, setUserData] = useState<UserDeliveryData | null>(null)

    function createNewOrder(data: UserDeliveryData) {
        if(!data) return null

        setUserData(data)

        const stateJSON = JSON.stringify(userData)
        localStorage.setItem('@coffee-delivery:user-data-1.0.0', stateJSON)

        //Empty cart
        setCoffeeCart([])
        refreshCart([])
        
        return data
    }

    function addCoffeeToCart(coffee: CoffeGalleryProps) {
        // Check if there is already the same coffee in the cart
        const existingCoffeeInCart = coffeeCart.findIndex(item => item.name === coffee.name)

        if(existingCoffeeInCart !== -1) {
            //if exists, increment quantity
            const updatedCart = [...coffeeCart]
            if(updatedCart[existingCoffeeInCart].quantity && coffee.quantity) {
                updatedCart[existingCoffeeInCart].quantity! += coffee.quantity
            }
            refreshCart(updatedCart)
        } else {
            const updatedCart = [...coffeeCart, coffee]
            refreshCart(updatedCart)
        }
        
    }

    function refreshCoffeeInCart(coffee: CoffeGalleryProps) {
        const updatedCart = coffeeCart.map(item => {
            if(item.name === coffee.name) {
                item.quantity = coffee.quantity
            }
            return item
        })
        refreshCart(updatedCart)

    }

    function removeCoffeeFromCart(coffee: CoffeGalleryProps) {
        const updatedCart = coffeeCart.filter(item => item.name !== coffee.name)
        refreshCart(updatedCart)
        return updatedCart
    }

    function refreshCart(updatedCart: CoffeGalleryProps[]) {
        setCoffeeCart(updatedCart)
        //refresh in localstorage
        const stateJSON = JSON.stringify(updatedCart)
        localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', stateJSON)
    }

    useEffect(() =>{
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')

        if(storedStateAsJSON) {
            setCoffeeCart(JSON.parse(storedStateAsJSON))
        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                coffeeCart,
                userData,
                createNewOrder,
                addCoffeeToCart,
                refreshCoffeeInCart,
                removeCoffeeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}