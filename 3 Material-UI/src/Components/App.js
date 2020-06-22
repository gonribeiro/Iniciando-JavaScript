import React, { Component, Fragment } from 'react'
import { Cabecalho, Rodape } from './Layouts'
import Exercicios from './Exercicios'
import { musculos, exercicios } from '../store.js'

export default class extends Component {
    state = {
        exercicios,
        exercicio: {}
    }

    pegarExerciciosPorMusculos() {
        return Object.entries(
            this.state.exercicios.reduce((exercicios, exercicio) => {
                const { musculos } = exercicio

                exercicios[musculos] = exercicios[musculos]
                    ? [...exercicios[musculos], exercicio]
                    : [exercicio]

                return exercicios
            }, {})
        )
    }

    mudarCategoria = categoria => {
        this.setState({
            categoria
        })
    }

    mudarExercicioSelecionado = id => {
        this.setState(({ exercicios }) => ({
            exercicio: exercicios.find(ex => ex.id === id)
        }))
    }

    render() {
        const exercicios = this.pegarExerciciosPorMusculos(),
            { categoria, exercicio } = this.state


        return <Fragment>
            <Cabecalho />

            <Exercicios 
                exercicio={exercicio}
                categoria={categoria}
                exercicios={exercicios}
                onSelect={this.mudarExercicioSelecionado}
            />
            
            <Rodape 
                categoria={categoria}
                musculos={musculos}
                onSelect={this.mudarCategoria}
            />
        </Fragment>
    }
}