import Arrow from "../atoms/arrow"
import '../molecules/collapse.css'
import Collapselist from "../atoms/collapselist";
import { useState } from "react"

export default function Collapse( {texte, collapsetitle, equipments }) {
    const [show, setshow,] = useState(false);
    const [rotate, setrotate,] = useState(270);
    const changeclass = () => {
        setshow(!show);
        setrotate(show ? 270 : 90);
    }
    return (
        <>
    <button onClick={changeclass} type="button" className="collapsible">{collapsetitle}<Arrow direction={{ rotate: rotate + 'deg',}}/></button>  
    <div className={show ? "content" : "content-hidden"}>
        <p>{texte}</p>
        <ul>
            {equipments && equipments.map((list) => <Collapselist list={list} key={list}/>)}
        </ul>
    </div>
    </>
    )
}