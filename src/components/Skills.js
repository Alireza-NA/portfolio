import React from 'react';
//Icons 
import Html from '../assets/html-144.svg'
import Css from '../assets/css-144.svg'
import Sass from '../assets/sass-144.svg'
import Js from '../assets/javascript-144.svg'
import react from '../assets/reactjs-144.svg'
import Git from '../assets/git-144.svg'

//Styles
import styles from '../styles/Skills.module.scss';
const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h1>Skills</h1>
            <p>(Skills junior level)</p>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <img src={Html} className={styles.iconhover} alt='html-icon'/>
                    <span>HTML</span>
                </div>
                <div className={styles.icon}>
                    <img src={Css} className={styles.iconhover} alt='css-icon'/>
                    <span>Css</span>
                </div>
                <div className={styles.icon}>
                    <img src={Sass} className={styles.iconhover} alt='scss-icon'/>
                    <span>Sass</span>
                </div>
                <div className={styles.icon}>
                    <img src={Js} className={styles.iconhover} alt='js-icon'/>
                    <span>Js</span>
                </div>
                <div className={styles.icon}>
                    <img src={react} className={styles.iconhover} alt='react-icon'/>
                    <span>React</span>
                </div>
                <div className={styles.icon}>
                    <img src={Git} className={styles.iconhover} alt='git-icon'/>
                    <span>Git</span>
                </div>
            </div>

        </section>
    );
};

export default Skills;