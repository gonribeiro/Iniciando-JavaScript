import { useState } from 'react';
import Child from './child';

export default function Parent() {
    const [varParent, setVarParent] = useState('Variável do Componente Pai');
    const [varChild, setVarChild] = useState('Variável do Componente Filho');

    const handleVarChild = (event: any) => {
        setVarChild(event.target.value);
    };

    return (
        <>
            {varParent}
            <br />
            <Child
                setVarParent={setVarParent}
                varChild={varChild}
            />
            <br />
            <input
                type="text"
                placeholder='Alterar variável do componente filho pelo componente pai'
                onChange={handleVarChild}
                style={{ width: '350px' }}
            />
        </>
    );
};