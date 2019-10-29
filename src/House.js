import React, { Component } from 'react'

export default class House extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.data.houseName}</h1>
                <img src={this.props.data.imgSrc}/><p>
                <b>Founder:</b> {this.props.data.founder}</p>
            
        
                <p><b>element:</b> {this.props.data.element}<br/></p>

            </div>
        )
    }
}
