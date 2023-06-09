// import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import lilithPic from '../public/img/lilith.png';
import { getAllPublished } from '../lib/notion';
import styles from '../styles/Journal.module.css';

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};
export default function Journal({posts}) {
  if(!posts) return <h1>No posts</h1>

  return (
     <>
       <main>
         <Image src={lilithPic} alt="captain's log" />
       </main>
       <article>
         <h1>Journal Entries</h1>
         {posts.map((post, index) => (
           <section key={index} className={styles.post}>
             <div>
               <b><Link href={"/posts/" + post.slug}>{post.title}</Link></b> . . {post.date}<p>{post.description}</p>
             </div>
           </section>
         ))}
  		 </article>
     </>
  );
}

















