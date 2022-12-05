import React from 'react';

export default function Card(props) {


    return (
        <div style={{ maxWidth: "600px", justifyContent: "space around", margin: "0 px" }}>
            <a href={props.activeLink} className="card">
                <img
                    className="card-body"
                    src={props.img}
                    alt="Card cap"
                />
                <div className='overlay'>
                    <a href={props.repoLink} alt="Github">Github Repo</a>
                </div>
            </a>

        </div>
    );
}
