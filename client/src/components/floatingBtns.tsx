import React, { CSSProperties } from "react";

interface Props {

}
/* 
Create btn component for "POST" to express api 
Create component that counts amount of selected PKMNS
*/
export default class FloatingBtns extends React.Component<Props> {
  
    
 
    render() {
        return (
            <div style={btnWrapper}>
                <input style={input} placeholder="Team name"></input>
                <div style={pokeCounterDiv}>
                    <div style={round}></div>
                    <div style={round}></div>
                    <div style={round}></div>
                    <div style={round}></div>
                    <div style={round}></div>
                    <div style={round}></div>
                </div>
                <button style={btn}>Add team</button>
            </div>
        )
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
    padding: "10px"
    
}

const btn: CSSProperties = {
    fontSize: "1.5em",
    display: "flex"
}

const input: CSSProperties = {
    fontSize: "1.5em",
    maxWidth: "100%"
}

const round: CSSProperties = {
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
}