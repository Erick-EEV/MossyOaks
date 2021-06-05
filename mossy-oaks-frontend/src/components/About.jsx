import {React, useState} from 'react';

const About = () => {


    const [hello,useHello] = useState("Hello World");
    return (
        <div>
            <h2>About</h2>
            <h1>Mossy Oaks</h1>
            <p>Our mission is to bring you the lawn of your dreams</p>
        </div>
    );
}

export default About;



