import React from "react"
import {paragraph} from "./paragraph.module.css"

export default ({children}) => (
    <p className={paragraph}>{children}</p>
)