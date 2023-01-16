import { useState } from "react";
import React from "react";
import "./Mega.css"

export default (props) => {
    

    function GerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ? GerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function GerarNumeros(quantidade){
        const numeros = Array(quantidade).fill(0).reduce((nums) => {
            const novoNumero = GerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)

        return numeros
    }

    const [quantidade, setQuantidade] = useState(props.quantidadeDeNumeros)
    const numerosIniciais = GerarNumeros(quantidade)
    const [numeros, setNumeros] = useState(numerosIniciais)
    
    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de números</label>
                <input type="number" value={quantidade} onChange={e => setQuantidade(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(GerarNumeros(quantidade))}>Gerar numeros</button>
        </div>
    )
}