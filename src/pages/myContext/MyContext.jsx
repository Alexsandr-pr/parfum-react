import { createContext  } from "react";
import { useState , useEffect} from "react";
import { useSelector } from "react-redux";

export const Context = createContext()
export const MyContext = ({children}) => {
    
    const saleCurrentUserBD = useSelector(state => state.user.currentUser.userSale) || 0 ;

    const initialDataCart = JSON.parse(localStorage.getItem("cart")) || [];

    const [dataCart, setDataCart] = useState(initialDataCart);
    const [cardNumber, setCadrNumber] = useState(1011001);
    const [sale, setSale] = useState(0)

    const [activeSearch, setActiveSearch] = useState(false)

    const onChangeSaleUser = (e) => {
        if(e > saleCurrentUserBD) {
            setSale(saleCurrentUserBD)
        } else {
            setSale(e)
        }
    }

    const onChangeCardNumber = (id) => {
        setCadrNumber(id);
    }
    
    const [allPrice, setAllPrice] = useState(0)
    const [quantity, setQuantity] = useState(0);

    const plusAllPrice = () => {
        let all = []
        dataCart.forEach(item => {
            const {salePrice, order, quantity} = item
            order && all.push(quantity * salePrice)
        })
        setAllPrice(all.reduce((a, b) => a + b, 0));
    }

    const allQuantityCart = () => {
        let current = 0;
        dataCart.forEach((item) => {
            const {order, quantity} = item
            if(order) {
                current += quantity
            }
        });
        setQuantity(current)
    }
    useEffect(() => {
        plusAllPrice()
    }, [dataCart])

    useEffect(() => {
        allQuantityCart()
    }, [dataCart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(dataCart));
    },[dataCart])

    return (
        <Context.Provider  value={{ 
            quantity,
            setActiveSearch, 
            activeSearch,
            sale,
            setSale, 
            onChangeSaleUser,                
            dataCart, 
            setDataCart,      
            cardNumber, 
            setCadrNumber, 
            onChangeCardNumber, 
            allPrice}
        }>
            {children}
        </Context.Provider>
    )
}





