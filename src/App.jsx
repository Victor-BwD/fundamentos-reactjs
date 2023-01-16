import React from "react";
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import { Familia } from "./components/basics/Familia";
import { FamiliaMembro } from "./components/basics/FamiliaMembro";
import { ListaAlunos } from "./components/repeticao/ListaAlunos";
import "./App.css";
import { ListaProdutos } from "./components/repeticao/ListaProdutos";
import ParOuImpar from "./components/conditional/ParOuImpar";
import usuarioinfo from "./components/conditional/usuarioinfo";
import Usuarioinfo from "./components/conditional/usuarioinfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/desafio-Megasena/Mega";


export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="Exemplo de card">
                <RandomNumber min={2} max={100} />
            </Card>
            <Card titulo="Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Dornelles">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Thaisa"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="Repetição" color="#1900f8">
                <ListaAlunos />
            </Card>
            <Card titulo="Repetição produtos" color="#52df59">
                <ListaProdutos />
            </Card>S
            <Card titulo="Condicionais" color="#523f59">
                <ParOuImpar  numero={20}/>
                <Usuarioinfo usuario={{nome: 'Fernando'}}></Usuarioinfo>
                <Usuarioinfo usuario={{email: 'email@email.com'}}></Usuarioinfo>
            </Card>
            <Card titulo="Comunicação Direta" color="#d34deb">
                <DiretaPai />
            </Card>
            <Card titulo="Comunicação Indireta" color="#d900ff">
                <IndiretaPai />
            </Card>
            <Card titulo="Componente controlado" color="#ffd000">
                <Input />
            </Card>
            <Card titulo="Contador" color="#2e2e2e">
                <Contador numeroInicial={10}/>
            </Card>
            <Card titulo="Mega-sena" color="#811818">
                <Mega quantidade={8}/>
            </Card>
        </div>
        
        
    </div>