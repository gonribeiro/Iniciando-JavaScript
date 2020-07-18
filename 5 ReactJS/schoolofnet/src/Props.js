import React from 'react';
import Props2 from './Props2';

function Props(props) {
    // console.log(props.attr, props.teste);
    return (
        <h1>
            {props.teste1}, {props.teste2}
            <Props2 teste3 = 'Valor3' />
        </h1>
    );
}

export default Props;