import React, { cloneElement } from 'react'

export const Familia = (props) => {
  return (
    <div>
        {React.Children.map(props.children, (element, i) => {
            return cloneElement(element, {...props, key: i})
        })}
    </div>
  )
}
