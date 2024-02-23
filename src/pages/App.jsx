
import { lazy } from "react"
import {Routes, Route} from "react-router-dom"
import { useContext , useEffect} from "react";
import { Context } from "./myContext/MyContext";
import { useDispatch } from "react-redux";
import Layout from "./Layout/layout"
import { auth } from "../action/user";

const Home = lazy(() => import("./Homepage"));
const About = lazy(() => import("./Aboutpage/Aboutpage"));
const Userpage = lazy(() => import("./User/Userpage"));
const BonusPage = lazy(() => import("./Bonuspage/bonuspage"));
const Document = lazy(() => import("./Documentpage/documentpage"));
const CardPage = lazy(() => import("./Cardpage/Cardpage"));
const CartTovar = lazy(() => import("./CartTovar/CartTovar"));
const Malepage = lazy(() => import("../pages/Malepage/Malepage"))
const PlaceInOrderPage = lazy(() => import("./PlaceInOrderPage/PlaceInOrderPage"));

function App () {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])


    const {cardNumber, onChangeCardNumber} = useContext(Context);
    const {dataCart, setDataCart} = useContext(Context);
    const onAddToCart = (newCard, id, value) => {

        const indexValue = dataCart.findIndex(item => item.valueMl === value && (item.id === id));

        if(indexValue !== - 1) {
            setDataCart((prev) => {
                
                const start = prev.slice(0, indexValue)
                let element = prev[indexValue]
                const end = prev.slice(indexValue + 1)
                element = { ...element, quantity: element.quantity + newCard.quantity };
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
            const indexValue = dataCart.findIndex(item => item.valueMl === value && (item.id === id));
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

    const onToggleOrder= (id, check, value) => {
        const index = dataCart.findIndex(item => item.valueMl === value && (item.id === id));
        setDataCart(prev => {
            const updatedCart = prev.map((item, i) => {
                if (i === index) {
                    return {...item, order: check};
                } else {
                    return item;
                }
            });
            return updatedCart;   
        })
    }

    return (
        <>   
            <Routes>
                <Route path="/" element={ <Layout />}>
                    <Route index element={<Home  onAddToCart={onAddToCart} onChangeCardNumber={onChangeCardNumber}/>}/>
                    <Route path="user" element={<Userpage/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="bonus" element={<BonusPage/>}/>
                    <Route path="document" element={<Document/>}/>
                    <Route  path="card" element={<CardPage   
                                                        onAddToCart={onAddToCart} 
                                                        onChangeCardNumber={onChangeCardNumber} 
                                                        cardNumber={cardNumber}/>}/>
                    <Route path="cart" element={<CartTovar
                                                        onToggleOrder={onToggleOrder}
                                                        onChangeCurrentOnClick={onChangeCurrentOnClick}
                                                        onDeleteItemInCart={onDeleteItemInCart} 
                                                        dataCart={dataCart}/>}/>
                    <Route path="male" element={<Malepage/>}/>
                    <Route path="order" element={<PlaceInOrderPage/>}/>
                </Route>
            </Routes>
        </>
    )
}




export default App;
