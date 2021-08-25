import React, { CSSProperties } from "react";

type Props = {
    children: React.ReactChild,
  };

export default function Section(props: Props) {

    return (
        <div className="section" style={containerStyle}>
            {props.children}
        </div>
    )
}


const containerStyle: CSSProperties = {
    backgroundColor: "red",
    flex: 1,
    display: "flex",
    overflow: "auto",
    justifyContent: "center"
}
    
    
    
