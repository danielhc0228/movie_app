import React from "react";

function About(props) {
    console.log(props);
    return (
        <div className='about__container'>
            <span>“There's no place like home.”</span>

            <span>− The Wizard of Oz, 1939</span>
        </div>
    );
}

export default About;
