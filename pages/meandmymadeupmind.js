import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import mindPic from '../public/img/meandmymadeupmind.png'
import styles from '../styles/Home.module.css'

export default function Projects() {

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Image src={mindPic} alt="blather inflection" />
         <div className={styles.text}>
          <p>So shit just got real. Well Artificial really. No really, Artificial Intelligence just got smart
          AND Artificial Intelligence just got creative. As of now, early 2023, a littany of
          machine learning systems are available that will, given simple instructions, create
          stunning images and write prose, poetry, scientific and technical documents, and even
          tell jokes.</p>
        </div>
        <div className={styles.text}>
          <p> It is possible for pretty much anyone to create professional'ish
          creative content and alot of graphic designers and copywriters have found themselves
          out of work. It has become easy for people with no skill to experience the thrill of
          creative expression. </p>
         </div>
         <div className={styles.text}>
          <p>It has also given those of with a true passion for art a fucking
          literal magic wand. We can work through ideas in minutes and hours that would take weeks and
          months and we can do so many things that were flatout impossible. It's quite simply
          intoxicating. So I think the loss of a few thousand short sighted hacks is worth the
          price of admission. </p>
        </div>
        <div className={styles.text}>
          <p>So this is the beginning of a conversation and a collaboration between man and machine.
          A partnership between the human beings known as the Wakeless Collective and a few artificially
          intelligent creative entities. We will be continually adding images, clips, texts, journal entries
          and the software we discover and create for any and all to follow along, utilize in their own
          experiments, or join us for what should be a really wild ride.</p>
        </div>
      </article>
    </div>
  );
}