import React from "react"
import {container, link} from "./header.module.css"

export default ({children}) => (
    <div className={container}>
        {React.Children.map(children, child => (
            React.cloneElement(child, {className: link})
        ))}
    </div>
)