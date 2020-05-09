import React from "react"
import {Helmet} from "react-helmet"
import {body} from "./layout.module.css"

export default ({children}) => (
    <div>
        <Helmet>
            <body className={body} />
        </Helmet>
        <div>{children}</div>
    </div>
)