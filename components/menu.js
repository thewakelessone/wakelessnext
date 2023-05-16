import Link from 'next/link'
import styles from './Menu.module.css'


export default function Menu() {
    return (
      <div className={styles.menu}>
          <div className={styles.item}>
            <Link href="/">Propaganda | Mission</Link>
          </div>
          <div className={styles.item}>
            <Link href="/projects">Wakeless Endeavours</Link>

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
            <div className={styles.kid}>
                <Link href="/products">ThreadBare HeadGear</Link>
            </div>
          </div>
          <div className={styles.item}>
            <Link href="/fodder">Creative Fodder + Research</Link>
          </div>
          <div className={styles.item}>
            <Link href="/journal">Copiousity Encouraged</Link>
          </div>
          <div className={styles.item}>
            <Link href="/we">Wakeless We: inner circle</Link>
          </div>
       </div>
    )
}