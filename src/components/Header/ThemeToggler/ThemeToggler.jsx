import styles from './ThemeToggler.module.css';
import {useTheme} from '../../../hooks/use-theme';
import {FiMoon} from 'react-icons/fi';
import {BiSun} from 'react-icons/bi';


const ThemeToggler = () => { 
    const { theme, setTheme } = useTheme();

    const handleDarkClick = () => {
       setTheme('dark')
    };

    const handleLightClick = () => {
       setTheme('light')
    };

    function DarkButton() {
        return (
            <button dark-mode="true" onClick={handleDarkClick} className={styles.ThemeModeBtn} id='theme-dark' type="button">
                <FiMoon size={30} color='#3E85F3' />
            </button>
        )
    };

    function LightButton() {
        return (
            <button dark-mode="false" onClick={handleLightClick} className={styles.ThemeModeBtn} id='theme-light' type="button">
                <BiSun size={30} color='#3E85F3' />
            </button>
        )
    };
    
    function CurrentButton() {
        if (theme === 'light') {
          return <DarkButton/>
        }
        return <LightButton/>
    };


    return(
        <CurrentButton/>
    )
};

export default ThemeToggler;
