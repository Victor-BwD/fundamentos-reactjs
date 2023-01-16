import React from 'react'

export const FamiliaMembro = (props) => {
  return (
    <div>
        {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  )
}
