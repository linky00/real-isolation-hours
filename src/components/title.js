import React from "react"
import {container, line} from "./title.module.css"

export default ({children}) => (
    <div className={container}>
        {children.split(" ").map((word) => (<div className={line}>{word}</div>))}
    </div>
) 
