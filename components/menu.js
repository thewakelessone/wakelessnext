import Link from 'next/link'
import styles from './Menu.module.css'


export default function Menu() {
    return (
      <div className={styles.menu}>
          <div className={styles.item}>
            <Link href="/projects">Projects Brands Endeavours</Link>

            <div className={styles.kid}>
                <Link href="/mechanicalhand">Mechanical Hand</Link>
            </div>
            <div className={styles.kid}>
                <Link href="/blather">Blather Inflection</Link>
            </div>
            <div className={styles.kid}>
                <Link href="/meandmymadeupmind">MeAndMyMadeUpMind</Link>
            </div>
            <div className={styles.kid}>
                <Link href="/anarchy">Sociable Anarchy</Link>
            </div>
          </div>
          <div className={styles.item}>
            <Link href="/fodder">Creative Fodder  Resources</Link>
          </div>
          <div className={styles.item}>
            <Link href="/journal">Stream of Consciousness</Link>
          </div>
          <div className={styles.item}>
            <Link href="/one">The Wakeless One</Link>
          </div>
       </div>
    )
}