import { createContext  } from "react";
import { useState } from "react";


export const Context = createContext()
export const MyContext = ({children}) => {

    const [cardNumber, setCadrNumber] = useState(1011001);
    
    const [dataCart, setDataCart] = useState([])

    const onChangeCardNumber = (id) => {
        setCadrNumber(id);
    }
    return (
        <Context.Provider  value={{
                                    dataCart, setDataCart, 
                                    cardNumber, setCadrNumber, onChangeCardNumber}}>
            {children}
        </Context.Provider>
    )
}





