import React from "react";
import {SiLinkedin, SiGithub, SiMedium} from 'react-icons/si'

function Footer() {
    return (
        <footer style={{ display: "flex", flexWrap: "wrap", alignContent: "center", maxWidth: "140px", margin: "0 auto" }}>
                    <a href="https://www.linkedin.com/in/williamseban/" alt="linkedin" style={{margin: "10px"}}>
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/wseban" alt="Github" style={{margin: "10px"}}>
                        <SiGithub/>
                    </a>
                    <a href="https://medium.com/@fitnesswill13" alt="medium blog site" style={{margin: "10px"}}>
                        <SiMedium/>
                    </a>
        </footer>
    );
}

export default Footer;