import React, { CSSProperties } from "react";

type Props = { 
    children: any
  };

export default function List(props: Props) {


    return (
        <div style={style}> 
            {props.children}
        </div> 
        
    )
}


const style: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "80%",
}