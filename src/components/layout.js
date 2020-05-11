import React from "react"
import {Helmet} from "react-helmet"
import Title from "./title"
import {body, box, column} from "./layout.module.css"

export default ({children}) => (
    <div>
        <Helmet>
            <body className={body} />
        </Helmet>
        <div className={box}>
            <div className={column}>
                <Title>REAL ISOLATION HOURS</Title>
            </div>
            <div className={column}>
                {children}
            </div>
        </div>
    </div>
)