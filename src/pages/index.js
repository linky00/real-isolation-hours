import React from "react"
import Layout from "../components/layout"
import {HeaderContainer, HeaderLink} from "../components/header"
import Camera from "../components/camera"

export default () => (
    <Layout>
        <HeaderContainer>
            <HeaderLink to="/about">ABOUT</HeaderLink>
            <HeaderLink to="/submit">SUBMIT CONTENT</HeaderLink>
        </HeaderContainer>
        <Camera />
    </Layout>
)