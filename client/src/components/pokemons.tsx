import React from "react";
import Card from "./card";
import List from "./list";
import { PokemonDetail } from "./main";



interface Props {
    pokemon: PokemonDetail[],
    updatePkmnState: (state: any) => void
}


export default class Pokemons extends React.Component<Props> {
    constructor(props: any) {
        super(props);
      
        this.selectPkmn = this.selectPkmn.bind(this)
    }
     
    selectPkmn(obj: string) {
        const foundPokemon = (pokemon: PokemonDetail) => {
            return pokemon.name === obj;
          };
        let clonedArray = this.props.pokemon
        let pkmn = clonedArray.find(foundPokemon)
        if(pkmn) {
            pkmn.isSelected = !pkmn.isSelected
            this.props.updatePkmnState(clonedArray)
        } 
        
    }

    greenOrWhite(item: any) {
        if(item.isSelected) {
            return {backgroundColor: "lightgreen"}
        }
        else {
            return {backgroundColor: "rgba(230, 230, 230, 0.6)"}
        }
    }
 
    render() {
        return (
            <List>
                {  
                    this.props.pokemon.map((item) => {
                    return <Card key={item.id} title={item.name} isSelectedStyle={this.greenOrWhite(item)} selector={this.selectPkmn} />           
                    })  
                }
            </List>
            
        )
    }
}

