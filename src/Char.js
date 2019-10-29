import React, { Component } from 'react'

export default class Char extends Component {
    render() {
        return (
            <div className="card">
            <h1>{this.props.data.notableCharacter.charName}</h1>
            <img src={this.props.data.notableCharacter.imgSrc}/><p>
            <b>Hause:</b> {this.props.data.houseName}</p>
        
    


        </div>
        )
    }
}
