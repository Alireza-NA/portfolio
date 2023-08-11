import React from 'react';

//Styles
import styles from '../styles/Home.module.scss';
//Image
import man from '../assets/man.png';

const Home = () => {
    return (
        <section className={styles.container} id="home">
            <div className={styles.image}>
                <img src={man} alt='man'/>
            </div>
            <div className={styles.content}>
                <h1>Hi I`m <span>Alireza</span> Front-end Developer</h1>
                <p>Hi name is Alireza . i'm a junior front-end
                 developer and software engineer student at the
                 islamshahr azad  university. i'm hardworking , flexible
                , trustworthy preson and i try my best to fit in any group.
                i have ability to work in the front-end position .
                </p>
            </div>
        </section>
    );
};

export default Home;