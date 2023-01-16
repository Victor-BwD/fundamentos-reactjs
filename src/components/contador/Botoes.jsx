import React from "react";

export default props => {
    return(
        <div>
            <button onClick={props.incrementar}>Incrementar</button>
            <button onClick={props.decrementar}>Decrementar</button>
        </div>
    );
}