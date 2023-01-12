import React from 'react';
import { SiGithub } from 'react-icons/si'

export default function Card(props) {


    return (
        <div style={{ maxWidth: "600px", justifyContent: "space around", margin: "0 px" }}>
            <p style={{margin: "10px", fontFamily: "Papyrus", fontWeight: "bold", fontSize: "28px"}}>{props.name}</p>
            <a href={props.activeLink} className="card">
                <img style={{height: "350px", width: "600px"}}
                    className="card-body"
                    src={props.img}
                    alt="Card cap"
                />
                <div style={{fontSize: "30px" }} className='overlay'>
                    <a href={props.repoLink} alt="Github"><SiGithub/></a>
                </div>
            </a>

        </div>
    );
}
