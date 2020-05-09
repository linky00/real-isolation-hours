import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Title from "../components/title"
import Camera from "../components/camera"
import {box, column} from "./index.module.css"

export default () => (
    <Layout>
        <div className={box}>
            <div className={column}>
                <Title >REAL ISOLATION HOURS</Title>
            </div>
            <div className={column}>
                <Header>
                    <a href="https://google.com">ABOUT</a>
                    <a href="https://google.com">SUBMIT CONTENT</a>
                </Header>
                <Camera />
            </div>
        </div>
    </Layout>
)