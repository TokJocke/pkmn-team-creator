import React, { CSSProperties } from "react";
import { PokemonDetail } from "./main";
import NewTeamBtn from "./newTeamBtn";
import PkmnCounter from "./pkmnCounter";

interface Props {
    selectedPkmns: PokemonDetail[],
    getTeams: () => void
    resetIsSelected: () => void
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

    updateInputValue = (event?: any) => {
        if(event) {
            this.setState({
                inputValue: event.target.value
            });          
        }
        else {
            this.setState({
                inputValue: ""
            })
        }
    }


  
    render() {
        if(this.props.selectedPkmns.length) {
            return (
                <div style={btnWrapper}>
                    <input 
                        style={input} 
                        placeholder="Team name" 
                        value={this.state.inputValue} 
                        onChange={this.updateInputValue}>
                    </input>
                    <PkmnCounter selectedPkmns={this.props.selectedPkmns}/>
                    <div style={btnWrapp}>
                        <NewTeamBtn 
                            inputValue={this.state.inputValue} 
                            selectedPkmn={this.props.selectedPkmns} 
                            getTeams={this.props.getTeams} 
                            resetIsSelected={this.props.resetIsSelected}
                            updateInputValue={this.updateInputValue}
                        />
                        <button 
                            style={closeBtn}
                            onClick={() => this.props.resetIsSelected()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )
        }
        else {
            return null
        }
    }
}

const btnWrapper: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
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
    padding: "20px",
    border: "2px solid white"
}

const input: CSSProperties = {
    fontSize: "1.5em",
    backgroundColor: "rgb(230, 230, 230)",
    border: "3px solid rgb(102, 153, 255)",
    borderRadius: "10px"

}

const closeBtn: CSSProperties = {
    fontSize: "1.5em",
    width: "40%",
    alignSelf: "center",
 /*    marginTop: "15px", */
    backgroundColor: "rgb(255, 51, 51)",
    borderRadius: "5px",
    border: "none",
    padding: "5px",
}

const btnWrapp: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly"
}