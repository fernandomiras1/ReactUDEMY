import React, { Component } from 'react';


class ComponenteA extends Component {
    render() {
        return <p>ComponenteA</p>
    }
}

class ComponenteB extends Component {
    render() {
        return <p>ComponenteB</p>
    }
}


function useConditionalRendering(mostrarA) {
    if (mostrarA) {
        return <ComponenteA />
    }
    return <ComponenteB />
}

// Renderizado Condicional ( Ejemplo practico)
export default class ConditionalSection extends Component {
    
    constructor() {
        super()
        this.state = { mostrarA: true }
    }

    render() {
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/* Creamos dos componentes mas  */}
                {/* <ComponenteA />
                <ComponenteB /> */}

                {useConditionalRendering(this.state.mostrarA)}
            </div>
        )
    }
}