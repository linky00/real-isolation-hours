import React from "react"
import Layout from "../components/layout"
import {HeaderContainer, HeaderLink} from "../components/header"
import Paragraph from "../components/paragraph"

export default () => (
    <Layout>
        <HeaderContainer>
            <HeaderLink to="/">BACK</HeaderLink>
        </HeaderContainer>
        <Paragraph>Boop.</Paragraph>
    </Layout>
)