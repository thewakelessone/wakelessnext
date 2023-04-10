// import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import splashPic from '../public/img/splash.png';
import bansheePic from '../public/img/bansheebaby.png';
import backstoryPic from '../public/img/backstory.png';
import contactPic from '../public/img/contact.png';

import { Special_Elite } from 'next/font/google';
import { Electrolize } from 'next/font/google';

const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] });
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] });


export default function Home() {

  return (
       <div className={styles.container}>
          <article className={styles.article}>
            <Image src={splashPic} alt="wakeless concophonic collective" />
            <h2 className={styles.title}>Civilization is Rubble</h2>
            <p>Capitalism is dying and the era of giant centralized power and wealth
            hoarding corporations, banks, financial institutions, social and religious
            organizations, and nation states is almost, mercifully, over. The fat rich
            balding white dudes that have been hoarding the wealth of the world and
            limiting the flow and access of information since the dawn of civilization
            will not go down without a fight however so there are some ugly years to
            come. But the war is already won as there is no power on heaven or earth
            that is a match for the collective intelligence and will of the human race.
            So order that case of Dom and polish your oyster tray but don't send out
            the invitations just yet. There is still work to be done.
            </p>
            <p>If you are as excited and impatient as we are join the cause and foment
            insurrection. Help us hasten the pace of the revolution or if you know of a
            better way call us and we'll join you.</p>
            <p>Wakeless is a conceptional framework designed to prepare us for the impending
            transformation. A set of ideologies, methodologies, architectural schemes,
            philosophical, social, cultural and political perspectives based on our best
            educated guess of what the world will soon be like. These ideas are constantly
            evolving and the more raw data, intelligent analysis, and unique perspective we
             can build into the feedback loop the better these predictions will become. They
             are designed primarily as a sort of template for creating or restructuring pretty
             much any type of organization. If implemented well the resulting concoction
             should be well suited for the new paradigm. We hope. One thing we know for
             certain is that an entirely new approach is needed starting with a new
             definition of success.</p>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={bansheePic} alt="wakeless concophonic collective" />
            <h2 className={styles.title}>Painting a picture of the past</h2>
            <p>Art *is just decoration. Nothing more.*</p>
            <p>Well cave paintings were art and the first steps toward the development of
              written language.</p>
            <i>So I guess art gave us civilization but it's not important like science.</i>
            <p>Except the first scientists spent most of their time drawing and no one without
            great skill at drawing could be a scientist at all until the 19th century.</p>
            <p>But no artist has contributed anything useful...</p>
            <p>Well there were the innumerable inventions of davinci and JS Bach did invent
            the 12 tone musical system which made all western music for the last 500 years possible.</p>
            <p>But it's not like they had anything to do with the 7 wonders of the.... oh wait.</p>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={backstoryPic} alt="wakeless concophonic collective" />
            <h2 className={styles.title}>A brief history of the western world</h2>
            <p>Our history can be understood as one long war between those that embrace openness and
            sharing of ideas and those that horde and work to limit the flow of information. Champions
            of the conceptual property cause.  The notion of idea theft was introduced in the Talmud.
            Apparently Yahweh frowns on “Mind Crime” as more heinous than regular theft. Logic must have
            come later because nobody noticed the glaring hole in this theory. When you steal something
            you deprive the original owner of said thing. Unless they had memory wiping abilities I am
            not aware of this was not possible.</p>
            <p>To take an idea is to copy it and there are numerous benefits to be gained. Think of it like
            this. There is a problem that needs to be solved and 100 members of a group tasked with solving it.
            Imagine there are 100 possible solutions and our group is looking for the very best one. There are
            2 ways this could be done. Each member could work through all 100 solutions until one of them
            finds the best one. They would have to work through every one of them to make sure they had the
            right one. Or each member could analyze one solution and then compare notes with the rest of the
            class. It sounds stupid to say it out loud doesn’t  it. Obvious and natural with no down side and
            yet throughout our history a large part of the population has not only failed to see this but
            actually held violently to the opposite point of view. Baffling. </p>
            <p>Early champions the Greeks had an open society and the result was an explosion of progress
            placing them centuries ahead of their time. They had a thriving egalitarian democracy that valued
            art, philosophy, and was inching toward real science. Then the library of alexandria that contained
            all of their collective wisdom was burned to the ground and all was lost.  2,000 years of stagnation
            followed as fearful superstitious People of the Book actually valued ignorance and imposed it on the
            masses until the renaissance when the open team fought back with the advent of science.</p>
            <p>The last 500 years has been a bloody stalemate more or less and then in the 1970's and 80's a
            fatal blow was struck by the good guys. The gnu public license, the birth of the opensource movement
            and it's champion linux. The invention of the internet and it's donation to the world at large also
            played a vital role. The war isn't quite over yet but it has been won. Decisively.</p>
          </article>
          <div className={styles.padding}> </div>
          <article className={styles.article}>
            <Image src={contactPic} alt="wakeless concophonic collective" />
            <h2 className={styles.title}>The Wakeless Agenda</h2>
            <p>Leverage the power of the group to make interesting, useful, and aesthetically pleasing things,
            promote the artists and engineers of the collective and their work, aid the cause of freedom and
            sociable anarchism, and foment the revolution. This is our fundamental agenda.</p>
            <p>We value transparency and collaboration as the best means to achieve success in all things.
            We despise patents, copyrights, and intellectual property. We mock the notion of thought ownership
            and wonder where your supposed to the little orange flags.</p>
            <p>We recognize that frenetic innovation rates have triggered a revolution so many orders of magnitude
            beyond any that have come before that it is essentially beyond our ability to predict or comprehend
            any possible outcome. We do know, however, that a total transformation is guaranteed. A total
            transformation of culture, society, civilization, infrasctructure, the environment and the species
            itself.</p>
            <p>We have 2 major goals in this regard. 1 is to watch closely, analyze, and make predictions then
            use that knowledge to create organizations built to thrive in the new reality. 2nd is to participate
            in the revolution itself if even in some small way just to be a part of this profound historic event. </p>
          </article>
       </div>
  );
}

  /**     <ReactMarkdown>{ articles[2].content }</ReactMarkdown> */
