import React from "react";
import PandaLogo from "../images/panda_logo.png"

function Showcase () {
    return (<div>
        <div class="showcase">
            <img id="panda-logo" src={PandaLogo} alt="logo-img"/>
            <br/><br/>
            <div id="page-heading">
                <h1>Panda Erica</h1>
            </div>
        </div>
    </div>);
}

export default Showcase;