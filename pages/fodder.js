import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import babyPic from '../public/img/baby.png'
import styles from '../styles/Fodder.module.css'

export default function Fodder() {
  return (
     <div className={styles.container}>
         <Image src={babyPic} alt="fodder" />
         <article className={styles.article}>
            <h1>Fodder . Inspiration . Weird shit</h1>
            <ul>
              <li>Note to self: consider making a youtube channel of short summary clips of this shit</li>
              <li>::: <a href="https://www.mysteryfleshpitnationalpark.com/">
                Mystery Flesh Pit National Park
                </a>: home of the permian basin super-organism. I want one of these as a pet
              </li>
              <li>:::<a href="https://www.youtube.com/channel/UCUx1LdUZvKfvQJyaOIQVdNg">
                Thoth-93 Rhobot Ghod</a> just random shit
              </li>
              <li>::: <a href="https://www.youtube.com/@youdontknowyouknowyouknowy9342/shorts">
                  Youdontknowyouknow Youknowyoudont</a>: anna matskevich a russian modern/ballet dancer that
                  was drugged seruptitiously as part of a soviet mind control pogrom
              </li>
              <li>::: <a href="https://twitter.com/supercomposite/status/1567162288087470081">Loab</a></li>
              <li>::: <a href="https://www.youtube.com/watch?v=wJWksPWDKOc">The Caretaker - Everywhere at the end of Time
                  a 6 1/2 hour musical mindfuck about dementia.
              </a>
              </li>
              <li>::: <a href="http://backrooms-wiki.wikidot.com/">The Backrooms: a massively multi-content-creater
                  online world building endeavour</a></li>
              <li>::: <a href="https://www.youtube.com/watch?v=4zFB5TvqodQ">DMT entities</a></li>
              <li>::: <a href="https://effectindex.com/">The Subjective Effect Index: trippy</a></li>
            </ul>
  		   </article>
  		   <article className={styles.article}>
  		      <h2>PromptNoodles:</h2>
  		      <p>::: good prompts, useful phrases, interesting things to ask
  		          our fake friends ( see e-freinamy ), tips and tricks
  		      </p>
  		      <ul>
  		        <li>::: DMT Entities</li>
  		        <li>::: Non-euclidian or extra-euclidian spaces or entities or gods or demons</li>
  		      </ul>
         </article>
         <article>
              <h2>The Book</h2>
              <p>I have an idea for a book and/or world building project</p>
         </article>
     </div>
  );
}