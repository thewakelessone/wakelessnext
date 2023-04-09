import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import mechhandPic from '../public/img/mechhandsplash.png'
import blatherPic from '../public/img/blather.png'
import anarchyPic from '../public/img/anarchy.png'
import mindPic from '../public/img/meandmymadeupmind.png'
import styles from '../styles/Projects.module.css'

export default function Projects() {

  return (
    <>
      <Head>
        <title>Wakeless Projects</title>
      </Head>
      <main>
        <div className={styles.container}>
          <figure>
            <Link href="/mechanicalhand">
              <Image src={mechhandPic} alt="mechanical hand: studio in a can" />
              <figcaption className={styles.caption}>Studio in a Can. Go ahead and feast your lookyballs on these
                  sassy nuggets but be careful bud. We will hyponomitize you.
              </figcaption>
            </Link>
          </figure>
          <figure>
            <Link href="/blather">
              <Image src={blatherPic} alt="blather inflection" />
              <figcaption className={styles.caption}>Humanity finally has a common tongue with no rules at all just a
                  big pile of words that have no inherent meaning.
              </figcaption>
            </Link>
          </figure>
          <figure>
            <Link href="/anarchy">
              <Image src={anarchyPic} alt="sociable anarchy" />
              <figcaption className={styles.caption}>if the people-critters is helpful and friendly
                  they don't need no boss mans or other nothers fixin em up theys potholes and such.
              </figcaption>
            </Link>
          </figure>
          <figure>
            <Link href="/meandmymadeupmind">
              <Image src={mindPic} alt="me and my made up mind" />
              <figcaption className={styles.caption}>A Wakeless Collective - Bits n` Meat Mashup. It's just a conversation between man and machine I mean what
                  could go wrong?.
              </figcaption>
            </Link>
          </figure>
        </div>
      </main>
    </>
    )

}