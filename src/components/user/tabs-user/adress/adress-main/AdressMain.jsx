import { useState, useEffect, Suspense } from "react"
import { useSelector } from "react-redux"
import { addUserAdress } from "../../../../../action/user"
import { lazy } from "react"
import Title from "../../../title/Title"

import "./adress-main.scss"

const SuccsessMessage = lazy(() => import("../SuccsessMessage/SuccsessMessage"))
const FormAdress = lazy(() => import("../FormAdress/FormAdress"))


const AdressMain = () => {

    const adressCurrentUserBD = useSelector(state => state.user.currentUser.adress) || [];
    function convertToArr(obj) {
        let arr = [];
        for (let key in obj) {
            arr.push(obj[key]);
        }
        return arr;
    }
    
    const [adressUserDB, setAdressUserDB] = useState([])

    useEffect(() => {
        setAdressUserDB(convertToArr(adressCurrentUserBD))
    }, [])

    const [form, setForm] = useState(false);
    const [object, setObject] = useState({});
    const [timerId, setTimerId] = useState(false);

    const onChangeFormEditing = () => setForm(true)

    const onCloseForm = () => setForm(false)


    useEffect(() => {
        if(Object.keys(object).length > 0) {
            addUserAdress(object);   
        }
        console.log(object)
    }, [object])

    const timer = () => {
        const timers = setInterval(() => {
            setTimerId(false)
            !timerId && clearInterval(timers)
        }, 3000)
    }

    

    return (
        <>
            <div className="user-content__add">
                <Title title={"Адрес"}/>
                <div className="user-content__text txt-14"> 
                    <p>Следующие адреса будут использованы при оформлении заказов по-умолчанию</p>
                </div>
                <div className="user-content__sub-title">
                    <h3>Платёжный адрес:</h3>
                </div>
                {
                    adressUserDB.length > 0  ? null : 
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()} className="user-content__link">Добавить</button>
                        </div>
                }
            </div> 

            
            <Suspense>
                {
                    form && <FormAdress 
                            setTimerId={setTimerId}
                            timer={timer} 
                            setObject={setObject} 
                            onCloseForm={onCloseForm}
                            />
                }
            </Suspense>
            

            {   
                    (adressUserDB.length > 0) ? 
                    <div className="user-content__adress">
                        {
                            timerId ?  <SuccsessMessage/> : null
                        }
                        <div className="user-content__text">
                            {
                                adressUserDB.map((item, i) => {
                                    const param = item + ","
                                    return (
                                        <p key={i}>{param}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="user-content__button">
                            <button onClick={() => onChangeFormEditing()}  className="user-content__link">Изменить</button>
                        </div>
                    </div> : null
                
            }
        </>
    )
}



export default AdressMain;