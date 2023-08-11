import { Link } from 'react-router-dom';
// Styles
import styles from '../styles/Navbar.module.scss';
// Icons
import Dark from '../assets/Dark.svg';

const Navbar = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <h1>A<span>li</span></h1>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li>
                        <Link onClick={()=> window.location.replace("/#home")} >Home</Link>
                    </li>
                    <li>
                        <Link onClick={()=> window.location.replace("/#about")}>About</Link>
                    </li>
                    <li>
                        <Link onClick={()=> window.location.replace("/#skills")}>Skills</Link>
                    </li>
                    <li>
                        <Link onClick={()=> window.location.replace("/#projects")}>Projects</Link>
                    </li>
                    <li>
                        <Link onClick={()=> window.location.replace("/#contact")}>Contact</Link>
                    </li>                    
                </ul>
            </nav>
            <div className={styles.switch__team}>
                <img className={styles.svg} src={Dark} alt='Dark-mode-icon' />
            </div>
            <div className={styles.h__menu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Navbar;