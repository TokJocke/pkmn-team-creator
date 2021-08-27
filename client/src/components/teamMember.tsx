import React, { CSSProperties, useEffect, useState } from "react";

type Props = {
    pokemon: any
  };

interface State {
    pokemonDetails: any,
    loading: boolean
}

export default class TeamMember extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pokemonDetails: [],
            loading: true
        };
    }
       
    
    getPokemonDetails = async () => {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemon}`);
        const jsonData = await response.json();

        this.setState({
            pokemonDetails: jsonData
        }, () => this.setState({loading: false}))
    };


    async componentDidMount() {
        if(!this.state.pokemonDetails.length) {
            await this.getPokemonDetails()
        }
    }
    
    
    render() {
        if(this.state.loading) {
            return (
                <div>
                    <p>loading</p>
                </div>
            )
        }
        else {
            return (
                <div style={teamMemberWrap}>
                    <p>ID: {this.state.pokemonDetails.id}</p>
                    <p>{this.state.pokemonDetails.name}</p>
                    <img src={this.state.pokemonDetails.sprites.front_default}></img>
                </div>
                
            )
        }
    }
}


const teamMemberWrap: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "lightgray",
}