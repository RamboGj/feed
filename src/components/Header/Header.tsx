import styles from './Header.module.css'
import logo from '../../public/logo.svg'

export default function Header() {
    return (
        <header  className={styles.header}>
            <img src={logo} alt="logo" />
        </header>
    )
}