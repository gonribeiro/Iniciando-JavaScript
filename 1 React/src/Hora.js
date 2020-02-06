import React from 'react';

function Hora() {
    const horaAtual = () => {
        return new Date().toLocaleString('pt-BR', {
            hour: 'numeric', 
            minute: 'numeric', 
            hour24: true
        })
    }
    const texto = 'Hora Atual';
    return (
        <h1>{texto}: {horaAtual()}</h1>
    );
}

export default Hora;