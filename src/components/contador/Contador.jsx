import React from "react";
import Botoes from "./Botoes";
import Display from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends React.Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5, 
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        });
    };

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.increment} decrementar={this.decrement}/>
            </div>
        )
    }
}