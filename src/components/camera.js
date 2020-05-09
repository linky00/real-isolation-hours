import React from "react"
import {container, image} from "./camera.module.css"
import camera from "../../static/images/camera.jpg"

export default () => (
    <div className={container}>
        <img className={image} src={camera} alt="Test"/>
    </div>
)