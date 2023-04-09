import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/img/logobug.png'
import styles from './Navbar.module.css'


export default function Navbar() {
    return (
        <nav>
          <div className={styles.nav}>
            <Link href="/projects" className={styles.item}>Projects</Link>
            <Link href="/fodder" className={styles.item}>Fodder</Link>
            <Link href="/one" className={styles.item}>One</Link>
            <Link href="/gallery" className={styles.less}>Gallery</Link>
            <Link href="/mechanicalhand" className={styles.more}>Gallery : Mechanical Hand</Link>
            <Link href="/journal" className={styles.less}>Journal</Link>
            <Link href="/blather" className={styles.more}>Journal : Blather Inflection</Link>
            <Link href="/">
                <Image src={Logo} alt="wakeless" className={styles.bug} />
            </Link>
          </div>
        </nav>
    )
}