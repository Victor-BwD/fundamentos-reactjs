import React from "react";
import { useState } from "react";
import "./Input.css"

export default props => {

    const [valor, setValor] = useState('Inicial')

    function MudarInput(e) {
        setValor(e.target.value)
    }
    
    return (
        
        <div className="Input"> 
            <h2>{valor}</h2>
            <div>
                <input value={valor} onChange={MudarInput}></input>
                <input value={valor} readOnly></input>
            </div>
            
        </div>
    )
}