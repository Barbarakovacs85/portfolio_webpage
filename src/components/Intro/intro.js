import React from 'react';
import './intro.css';
import Iam from '../../assets/home.png';
import CV from '../../assets/CV.pdf'
import {Link} from 'react-scroll';

const intro = () => { 
return (
    <section id="intro">
       <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">Ich bin <span className="introName">Barbara</span><br />Website Designerin</span>
        <p className="introPara"><br />Herzlich willkommen auf meiner Webseite! 
        <br /> <br />
        Vielen Dank für Ihr Interesse!</p>
     
        <Link><button className="btn">Dowload CV</button></Link>
       </div>
    <img src={Iam} alt="Profile" className="Iam" />
    </section>
    );
}

export default intro;