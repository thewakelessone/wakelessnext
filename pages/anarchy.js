import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import anarchyPic from '../public/img/anarchy.png'
import styles from '../styles/Home.module.css'

export default function Projects() {

    return (
      <div className={styles.container}>
        <article className={styles.article}>
          <Image src={anarchyPic} alt="blather inflection" />
          <div className={styles.text}>
          <h2>Modern democracy is a farce.</h2>
          <p>Teamwork is humanities superpower. The ability to work together made us bigger,
          faster, and stronger than the lions, tigers, and bears. Oh my. Weak hairless apes
          become top of the food chain. Transcending the animal kingdom we gained dominion
          over nature and broke free of the glacial pace of natural evolution and began driving
          our own metamorphosis.</p>
         </div>
         <div className={styles.text}>
          <p>We need to be social. We ARE social by nature it is our defining feature and that which makes
          us more than animal. But where did this hierarchy bullshit come from. That is not natural at all.
          Somewhere along the way some well spoken but weak minded people decided that we needed order damnit. That
          someone needed to be in charge. And it stuck. Ever since small groups of fat balding white men have hid in
          centralized black boxes and controlled massive government, corporate, and financial machines that do more
          to enslave the masses then generate wealth for their masters. If wealth was all they were after they could
          open things up, get more money flowing throughout the economy, benefit from an a bottomless well of free
          opensource style labor and everybody would be richer. but wealth is not what theyre after. Power is.
          Keeping the weak under their thumb.</p>
         </div>
         <div className={styles.text}>
          <p>We don't need government. We never have. And now we really don't. We have all of the tools we need
          to self organize and fix our own pot holes. We can bind together geographically or globally around a
          common cause or interest. People with the problems fixing them themselves. Who'da'thunk? Instead of government
          granted development projects that either stall for years, die and never finish, or simply cost alot of money
          and not only not fix the original problem but create a much bigger one. We can fix our own potholes. Quicker,
          cheaper, and the way we want them fixed. Yes it would cost money but would you rather pay to fix a problem
          that directly affects you or just one giant lump sum taken from you without your permission ostensibly to
          fix everybody's problems but mostly just get's used invading other countries and threatening and intimidating
          the entire world into liking us or elses.</p>
         </div>
         <div className={styles.text}>
          <p>Fuck war, fuck bullying, fuck beign a superpower, fuck taxes, fuck governments, corporations, and banks.
          Fuck hierarchy and fuck taking life so god damn seriously. The end of centralized power is nigh and there is nothing anyone could or
          should do about it. Localization, distributed/encrypted/massively redundant systems that store all of our data, eliminate fraud,
          and give us the power to protect our assets, transact, and contract without overly paid highly corrupt and fallible human "experts". An economy
          of abundance in which everything every needs is just available locally and anything extravagant or complicated can be provided by
          volunteers or acquired by bartering. No corporations needed. No banks needed. No government needed. Only friendliness and cooperation
          needed. Welcome to Sociable Anarchy. BE FREE!!!!  </p>
          </div>
      </article>
    </div>
  );
}