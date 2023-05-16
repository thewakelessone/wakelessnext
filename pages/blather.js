import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import blatherPic from '../public/img/blather.png'
import styles from '../styles/Home.module.css'
import { getAllPublished } from '../lib/notion';
import Menu from '../components/menu'

export const getStaticProps = async () => {
  const data = await getAllPublished();

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };

};

export default function Blather({posts}) {
  if(!posts) return <h1>No posts</h1>

  return (
    <div className={styles.wrap}>
      <Menu className={styles.menu} />
      <div className={styles.container}>
        <article className={styles.article}>
          <Image src={blatherPic} alt="blather inflection" />
          <p><i>Welcome to the Wakeless Institute of Language and Thought. </i>Everything
              written happens here be it Narrative, Propaganda, Art Criticism, or Software.
              Blather serves as our warroom as well and blather is where all of our
              research is done.
          </p>
          <p>Language is innovation both primordial and meta. It is thing that makes all else possible,
            the thing we must use to create or discover then implement, explain, and teach. It is a weapon and a
             tool. It is medicine and disease, love, hate, hope, and death. Language is the mechanism thought and
             as it evolved so did we. With the spoken word we were critters no more and writing begat civilization.
             During the renaissance we began speaking literally, describing with precision, and measuring all sorts
             of things. This led to the invention of science and the industrial revolution. </p>
          <p>Gutenburg brought books to the great unwashed and ended 2000 years of oppression and stagnation by
            the catholic church. The telegraph, radio, television, and telephone united humanity across the globe.
            All impressive transformative events to be sure but nothing compared to the greatest innovation of alltime
            and it's just getting started.</p>
            <p>First the adoption of english as the de facto official language for all. Second a global network
            connecting every man, woman, and child to each other and to our collective knowledge. And third the invention
            of software language.</p>
        </article>
        <article className={styles.article}>
          <h3>Fun facts about language and the stuff we make with it.</h3>
          <ul>
              <li>Language is a technology: Our most powerful tool and effective weapon.</li>
              <li>Language is the mechanism of thought: no language no thinky parts wiggling around
                  bossing us around making us do stuff. Or at least feel pathetic for being such a
                  lazy twat.</li>
              <li>Thought is always conversational. Even when were alone we talk to ourselves. This
                    is proof that we are fundamentally social entities and collaboration is our super power.
              </li>
              <li>Every natural language is unique. They all make certain types of problems easier to solve
                    and lend themselves to a deeper understanding of certain concepts. And vise a versa.</li>
              <li>The more two languages differ the broader the disparagy between the two in terms of realms of understanding.</li>
              <li>All human languages are fundamentally limited in diversity by the physical limits of natural human sound
                    prduction and gestural capabilities </li>
              <li>Software Languages have no such limitations and therefore the possibilities of creating new languages with
                    novel characteristics that could open new possibilities of comprehention and problem solving are endless.
              </li>
              <li>Major language upgrades through history have triggered major changes to our species and the
                    way we live.</li>
              <li>Spoken language gave us the power to coordinate our actions making us collectively bigger, faster,
                    and stronger than any animal. It allowed us to escape the cruel justice of the animal kingdom placing
                    us firmly at the top of the foodchain.</li>
              <li>Written language gave us a collective memory to span generation so that each could improve quicker than
                    the last. It was the birth of civilization. We were no longer dependent on the slow pace of evolution but
                    able to progess at our own speed.</li>
              <li>Speaking literally, the printing press, telegraph, radio, television, and telephone made science possible
                    and gave everyone on the planet direct access to most of our collective knowledge.</li>
              <li>The advent of the internet and adoption of english as the de facto common tongue of humanity finished
                    the job of connecting us all to each other and the collective knowledge of mankind.</li>
              <li>By far the biggest event yet is the birth of Software Language. In addition to the aforementioned aspects
                    we now have the ability to make stuff with language. Directly. Not inspiration, or instructions but
                    actual things and there is no theoretical limit to what we will be able to make. Including intelligent
                    life forms as smart of much smarter than ourselves. There is an old word for this ability: Magic. And
                    as we create another universe and it's inhabitants an another old world will apply to us: Gods.</li>
              <li>Knock Knock jokes do not exist, they are an urban myth. Prove me wrong and think of one. You can't can you.</li>
          </ul>
        </article>
        <article className={styles.article}>
          <h3> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </h3>
          <h3>TO DO: show edit single post</h3>
          <h3> - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </h3>
        </article>
        <article className={styles.article}>
         <h1>Journal Entries</h1>
         {posts.map((post, index) => (
           <section key={index} className={styles.post}>
             <div>
               <b><Link href={"/posts/" + post.slug}>{post.title}</Link></b> . . {post.date}<p>{post.description}</p>
             </div>
           </section>
         ))}
        </article>
     </div>
   </div>
  );
}