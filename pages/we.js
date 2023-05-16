import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import onePic from '../public/img/one.png'
import styles from '../styles/Home.module.css'

export default function We() {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Image src={onePic} alt="fodder" className={styles.greyBG} />
        <section>
          <h2>Inner Circle</h2>
          <p>Christopher Hill . reluctant dictator/founder . art . word . code . idea<br/>
             Alyssa Bloom . business manager . muscle <br />
             Jamison Moore . creative director . also dead<br />
             Ragnar the relentless . mascott</p>
  		  </section>
      </article>
    </div>
  );
}