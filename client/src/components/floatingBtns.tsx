import React, { CSSProperties } from "react";
import { PokemonDetail } from "./main";
import NewTeamBtn from "./newTeamBtn";
import PkmnCounter from "./pkmnCounter";

interface Props {
    selectedPkmns: PokemonDetail[],
    getTeams: () => void
}

interface State {
    inputValue: any
}

export default class FloatingBtns extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    updateInputValue = (event: any) => {
            this.setState({
              inputValue: event.target.value
            }, () => console.log(this.state.inputValue));          
    }


  
    render() {
        if(this.props.selectedPkmns.length) {
            return (
                <div style={btnWrapper}>
                    <input style={input} placeholder="Team name" value={this.state.inputValue} onChange={this.updateInputValue}></input>
                    <PkmnCounter selectedPkmns={this.props.selectedPkmns}/>
                    <NewTeamBtn 
                        inputValue={this.state.inputValue} 
                        selectedPkmn={this.props.selectedPkmns} 
                        getTeams={this.props.getTeams} 
                    />
                </div>
            )
        }
        else {
            return null
        }
    }
}

const btnWrapper: CSSProperties = {
    backgroundColor: "yellow",
    position: "absolute",
    bottom: "10%",
    right: 0,
    left: 0,
    margin: "auto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: "20%",
    borderRadius: "15px",
    padding: "10px",
}

const input: CSSProperties = {
    fontSize: "1.2em",
    maxWidth: "100%"
}

/* const round: CSSProperties = {
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "100%",
    marginRight: "5px"
}

const pokeCounterDiv: CSSProperties = {
    display: "flex",
    marginTop: "5px",
    marginBottom: "5px",
    justifyContent: "space-evenly",
    backgroundColor: "lightgray",
    paddingTop: "5px",
    paddingBottom: "5px"
} */