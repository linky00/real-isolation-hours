import React from "react"
import {Link} from "gatsby"
import {container, link} from "./header.module.css"

export const HeaderContainer = ({children}) => (
    <div className={container}>{children}</div>
)

export const HeaderLink = ({to, children}) => (
    <Link to={to} className={link}>{children}</Link>
)