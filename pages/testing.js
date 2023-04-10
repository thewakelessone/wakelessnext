// import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import splashPic from '../public/img/splash.png';
import bansheePic from '../public/img/bansheebaby.png';
import backstoryPic from '../public/img/backstory.png';
import contactPic from '../public/img/contact.png';
import { getAllPublished } from '../lib/notion';

import { Special_Elite } from 'next/font/google';
import { Electrolize } from 'next/font/google';

const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] }) 
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] })

// import ReactMarkdown from 'react-markdown';

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};
export default function Testing({posts}) {
  if(!posts) return <h1>No posts</h1>
  console.log({posts})
  return (
       <div className={styles.container}>
          <article className={styles.article}>
            <Image src={splashPic} alt="wakeless concophonic collective" />
            <section>
                test
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={bansheePic} alt="wakeless concophonic collective" />
            <section>
                test
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={backstoryPic} alt="wakeless concophonic collective" />
            <section>
            </section>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={contactPic} alt="wakeless concophonic collective" />
            <section>
            </section>
          </article>
       </div>
  );
}

  /**     <ReactMarkdown>{ articles[2].content }</ReactMarkdown> */
