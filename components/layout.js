import Head from 'next/head';
// import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/utils.module.css';
// import Link from 'next/link';

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return(
        <>
          <Head>
            <title>Wakeless collective</title>
          </Head>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </>
    )
}


/*
          <div className={styles.sidebar}>
            <div>
              <ul>
                <li> . . . . . . . . . . . . . . . . . </li>
                <li> mechanical hand<br /> . . . . . . sweetened<br />
                . . . . . . condensed<br /> . . .studio in a can

                </li>
                <li> . . . . . . . . . . . . . . . . . </li>
                <li>blather.inflection<br />.software writing<br/>
                 . . regular writing<br /> . . . . spell casting<br/>
                 . . . . .jokes galore</li>
                <li> . . . . . . . . . . . . . . . . . </li>
                <li> . . . . . .me and my<br /> . . .made up mind</li>
                <li> . . . . . . . . . . . . . . . . . </li>
                <li> . . . . . . . .headgear</li>
                <li> . . . . . . . . . . . . . . . . . </li>
              </ul>
            </div>
          </div>
*/