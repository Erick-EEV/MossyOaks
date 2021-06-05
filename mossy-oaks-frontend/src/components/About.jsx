import {React, useState} from 'react';

const About = () => {


    const [hello,useHello] = useState("Hello World");
    return (
        <div>
            <h2>About</h2>
            <h1>Mossy Oaks</h1>
        </div>
    );
}

export default About;



