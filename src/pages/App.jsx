
import {Routes, Route} from "react-router-dom"
import { useContext, useState } from "react";


import Home from "./Homepage";
import About from "./Aboutpage/Aboutpage";
import Layout from "./Layout/layout";
import Userpage from "./User/Userpage";
import BonusPage from "./Bonuspage/bonuspage";
import Document from "./Documentpage/documentpage";
import CardPage from "./Cardpage/Cardpage";
import CartTovar from "./CartTovar/CartTovar"
import { Context } from "./myContext/MyContext";
import MalePage from "./Malepage/Malepage";

function App () {

    const {cardNumber, onChangeCardNumber} = useContext(Context);
    const {dataCart, setDataCart} = useContext(Context);

    const onAddToCart = (newCard, id, value) => {
        const indexValue = dataCart.findIndex(item => {
            return (item.valueMl === value) && (item.id === id)
        });

        if(indexValue !== - 1) {
            setDataCart((prev) => {
                
                const start = prev.slice(0, indexValue)
                let element = prev[indexValue]
                const end = prev.slice(indexValue + 1)
                element = { ...element, quantity: element.quantity + 1 };
                return [...start, element, ...end]
                /*
                const updatedCart = prev.map((item, i) => {
                    if (i === indexValue) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
                return updatedCart;
                
                */
                
            });
            
        } else {
            setDataCart(prev => ([...prev, newCard]));
        }
    };

    const onDeleteItemInCart = (id, value ) => {
        setDataCart(prev => {
            const indexValue = dataCart.findIndex(item => {
                return (item.valueMl === value) && (item.id === id)
            });

            const before = prev.slice(0, indexValue);
            const after = prev.slice(indexValue + 1);
            const newArr = [...before, ...after];
            return newArr
        })
    }

    const onChangeCurrentOnClick = (curr, id) => {
        const index = dataCart.findIndex(item => item.id === id);
        setDataCart(prev => {
            prev[index].quantity = curr;
            return [...prev]
        })
    }

    return (
        <>   
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home  onAddToCart={onAddToCart} onChangeCardNumber={onChangeCardNumber}/>}/>
                    <Route path="user" element={<Userpage/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="bonus" element={<BonusPage/>}/>
                    <Route path="document" element={<Document/>}/>
                    <Route  path="card" element={<CardPage  onAddToCart={onAddToCart} onChangeCardNumber={onChangeCardNumber} cardNumber={cardNumber}/>}/>
                    <Route path="cart" element={<CartTovar onChangeCurrentOnClick={onChangeCurrentOnClick} onDeleteItemInCart={onDeleteItemInCart} dataCart={dataCart}/>}/>
                    <Route path="male" element={<MalePage onAddToCart={onAddToCart}/>}/>
                </Route>
            </Routes>
        </>
    )
}




export default App;