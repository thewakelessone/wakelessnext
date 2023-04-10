// import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import splashPic from '../public/img/splash.png';
import { getAllPublished } from '../lib/notion';
import { Special_Elite } from 'next/font/google';
import { Electrolize } from 'next/font/google';
const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] });
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] });
import ReactMarkdown from 'react-markdown';
import superjson from 'superjson';
import serialize from 'serialize-javascript';
// import React, { useState, useEffect } from 'react';

export const getStaticProps = async() => {
  const res = await getAllPublished();

  const { data, meta } = serialize(res);
  console.log('data' + data);
  console.log('meta' + meta);
  return {
    props: {
      posts: {
        data,
        meta
      }
    }
  };
};

export default function Home({posts}) {
  if(!posts) return <h1>No posts</h1>
  console.log(" ********* " + posts)
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Image src={splashPic} alt="wakeless concophonic collective" />
        <section>

        </section>
      </article>
    </div>
  );
}

















