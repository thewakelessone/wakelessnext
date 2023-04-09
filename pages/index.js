// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import splashPic from '../public/img/splash.png'
import bansheePic from '../public/img/bansheebaby.png'
import backstoryPic from '../public/img/backstory.png'
import contactPic from '../public/img/contact.png'
// import Layout from '../components/layout'

import { Special_Elite } from 'next/font/google'
import { Electrolize } from 'next/font/google'

const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] }) 
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] })

import ReactMarkdown from 'react-markdown';
import { getArticles } from '../lib/articles';

export async function getStaticProps({ params }) {
    const articles = await getArticles(['intro.md', 'arthistory.md', 'openhistory.md', 'agenda.md']);
    // console.log('articles: ' + articles[2].content);
    return {
        props: {  articles  },
    };
}

export default function Home({ articles }) {

  return (
       <div className={styles.container}>
          <article className={styles.article}>
            <Image src={splashPic} alt="wakeless concophonic collective" />
            <section>
              <h2>{ articles[2].frontmatter.title }</h2>
              <ReactMarkdown>{ articles[2].content }</ReactMarkdown>
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={bansheePic} alt="wakeless concophonic collective" />
            <section>
              <h2>{ articles[1].frontmatter.title }</h2>
              <ReactMarkdown>{ articles[1].content }</ReactMarkdown>
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={backstoryPic} alt="wakeless concophonic collective" />
            <section>
              <h3>{ articles[3].frontmatter.title }</h3>
              <ReactMarkdown>{ articles[3].content }</ReactMarkdown>
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={contactPic} alt="wakeless concophonic collective" />
            <section>
              <h2>{ articles[0].frontmatter.title }</h2>
              <ReactMarkdown>{ articles[0].content }</ReactMarkdown>
            </section>
          </article>
       </div>
  );
}
