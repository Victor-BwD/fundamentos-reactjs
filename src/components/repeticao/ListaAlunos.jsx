import React from 'react'
import alunos from '../../data/alunos'

export const ListaAlunos = (props) => {
    const LISTA_DE_ALUNOS = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>{aluno.nome} - {aluno.nota}</li>
        )
    })

  return (
    <div>
        <ul>
            {LISTA_DE_ALUNOS}
        </ul>
    </div>
  )
}
