import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import onePic from '../public/img/one.png'
import styles from '../styles/Home.module.css'

export default function One() {
  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <Image src={onePic} alt="fodder" className={styles.greyBG} />
        <section>
          <h2>Greetings.</h2>
          <p> My name is Chris, a.k.a. Johrs Trulee, a.k.a. Ordinary Walrus, a.k.a. Uncle Horse, also known as The Wakeless One.
             I am an Artist, a Writer, a Developer, an Anarchist, and the founder of this little wannabe collective called Wakeless.
             My life has been primarily a creative pursuit starting with a pencil at age 2, a B.A. in Music, a career as a Web Designer
             that became a career as a Developer and Architect. After a couple of decades of this nonsense it became clear that the
             corporate world and I were ill suited for each other so I dropped out. I drifted into some dreary places and some dark places
             and moved around alot. Living in South Africa was definitely the highlight of, well, my life really. Throughout my life I
             have carried with this idea that has evolved but stayed largely true to the original spark as a teenager. So now I have
             come full circle and it is time to build. Starting with a blank canvas in the very literal sense as I recently lost
             everything I own and worse everything I have created in a devastating fire. So here I sit with nothing but my wit and
             my passion and my pretty broad range of skills determined to bring my dream to life. So if you see anything you like
             please hire me, or join me, or heckle me, or just say hello. Every little bit counts.</p>
  		  </section>
      </article>
    </div>
  );
}