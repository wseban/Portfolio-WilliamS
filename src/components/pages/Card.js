import React from 'react';
import { SiGithub } from 'react-icons/si'

export default function Card(props) {


    return (
        <div style={{ maxWidth: "600px", justifyContent: "space around", margin: "0 px" }}>
            <p style={{marginBottom: "5px" }}>{props.name}</p>
            <a href={props.activeLink} className="card">
                <img
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
