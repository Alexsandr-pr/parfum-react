import { createContext  } from "react";
import { useState , useEffect} from "react";


export const Context = createContext()
export const MyContext = ({children}) => {
    
    const initialDataCart = JSON.parse(localStorage.getItem("cart")) || [];
    const [dataCart, setDataCart] = useState(initialDataCart);
    const [cardNumber, setCadrNumber] = useState(1011001);
    const [sale, setSale] = useState(0)
    const onChangeCardNumber = (id) => {
        setCadrNumber(id);
    }
    let all = []
    const [allPrice, setAllPrice] = useState(0)
    
    const plusAllPrice = () => {
        dataCart.forEach(item => {
            const {salePrice, order} = item
            order && all.push(item.quantity * salePrice)
        })
        setAllPrice(all.reduce((a, b) => a + b, 0));
    }

    useEffect(() => {
        plusAllPrice()
    }, [dataCart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(dataCart));
    },[dataCart])


        
    return (
        <Context.Provider  value={{ sale,setSale, 
                                    dataCart, setDataCart, 
                                    cardNumber, setCadrNumber, onChangeCardNumber, 
                                    allPrice}}>
            {children}
        </Context.Provider>
    )
}





