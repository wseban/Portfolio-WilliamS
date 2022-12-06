import React from "react";
import {SiLinkedin, SiGithub, SiMedium} from 'react-icons/si'
import '../styles/linkStyles.css'; 

function Footer() {
    return (
        <footer style={{ display: "flex", flexWrap: "wrap", alignContent: "center", maxWidth: "240px", margin: "0 auto", height: "20vh", backgroundColor: "" }}>
                    <a href="https://www.linkedin.com/in/williamseban/" alt="linkedin" style={{fontSize: "40px", margin: "10px"}}>
                        <SiLinkedin/>
                    </a>
                    <a href="https://github.com/wseban" alt="Github" style={{fontSize: "40px", margin: "10px"}}>
                        <SiGithub/>
                    </a>
                    <a href="https://medium.com/@fitnesswill13" alt="medium blog site" style={{fontSize: "40px", margin: "10px"}}>
                        <SiMedium/>
                    </a>
        </footer>
    );
}

export default Footer;