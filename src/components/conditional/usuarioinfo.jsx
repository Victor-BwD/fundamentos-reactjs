import React from "react";
import If from './if.js'

export default props => {
    return (
        <div>
            <If test={props.usuario && props.usuario.nome}>
                Seja bem vindo {props.usuario.nome}!
            </If>
            <If test={!props.usuario || !props.usuario.nome}>
                Seja bem vindo amigão!
            </If>
            
        </div>
    )
}