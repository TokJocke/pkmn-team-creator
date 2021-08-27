import React, { CSSProperties } from "react";
import FloatingBtns from "./floatingBtns";
import Pokemons from "./pokemons";
import Section from "./section";
import Teams from "./teams";

/* 

Add state here or in pokemons that calculates allTeams.length to be able to calculate the last teams id and ++ its value 
Also add state for should update to be able to create rerender when new team added. 
and send array with selectedPokemons to save as state 
move up pokemon and teams state to this component and pass them down as props
*/
interface Props {

}

export default class Main extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedPkmn: [],
        };
    }
    setSelectedPkmn() {
        
    }
 
    render() {
        return (
            <div style={wrapper}>
                <Section>
                    <Pokemons/>
                </Section>
                <Section>
                    <Teams/>
                </Section>  
                <FloatingBtns />
            </div>
        )
    }
}

const wrapper: CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "blue",
    display: "flex",
    overflow: "auto"
}