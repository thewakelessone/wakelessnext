import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import mechPic from '../public/img/mechhandsplash.png'
import styles from '../styles/Hand.module.css'
import { CldUploadButton } from 'next-cloudinary'
import Menu from '../components/menu';

export async function getStaticProps() {

  const images = [
    {"public_id": "www/2", "width": 100, "height": 100},
    {"public_id": "www/babycyclops1",  "width": 100, "height": 100},
    {"public_id": "www/bansheebaby1",  "width": 100, "height": 100},
    {"public_id": "www/bansheebaby5",  "width": 100, "height": 100},
  ];

  return {
    props: {
      images,
    },
  }
}

export default function MechanicalHand({images}) {
  return (
   <div className={styles.wrap}>
     <Menu className={styles.menu} />
     <div className={styles.container}>
        <Image className={styles.splashpic} src={mechPic} alt="fodder" />
        <article className={styles.article}>
          <h3>We ride the bleeding edge with bloodied hands and bleeding hearts.</h3>
             <p>We make the fancy snacks for your eyeholes. And a softened meat product that produces
              gastro-intestinal brand awareness.  We create original artwork with traditional and digital media.
              Make prints, clothing, shower curtains, stationary, tchachkis, knick-knacks, baubles, trinkets,
              and gold dubloons. Illustration, animation, interaction, and graphic design are on the menu as well.
              write software. We are a full service web shop offering design, content, development,
              and architecture. Sculpture, 3D modeling, product design, and invention are things we do
              here. Also Generative Art.</p>
  		  </article>
  		  <Link href="/exhibit">
    		  <div className={styles.exhibit}>
    		    {images.map(({ public_id, width, height }) => (
              <Image
                alt="test"
                width={width}
                height={height}
                src={`https://res.cloudinary.com/mechanical-hand/image/upload/${public_id}`}
                className={styles.img}
              />
            ))}
          </div>
        </Link>
        <article className={styles.article}>
            <p>Humans have been fascinated with technology since the first sharpened stick.
            Every new breakthrough goes through a process. Step 1 is impressive
            abstraction - the "ooh aah" phase. We are all impressed but left wondering
            what in the hell we would do with it.
            </p>
            <p>This is where we come in. Artists are by definition people that tinker with
            technology in unintended (see incorrect) ways. Usually we just end up breaking them shits
            but occassionally we get unexpected and interesting results. Invariably some of these results
            inspire a portion of the great unwashed to attempt something similar and eventually some
            cheesy grinned suit wearing mother fuckers find a way to capitalize on the whole thing. And
            by this process cutting edge scientific potential becomes a range of tools, toys, and gadgets
            that entertain, engage, and ocassionally improve or at least significantly alter our daily lives.
            </p>
            <p>Click the magic button: <CldUploadButton uploadPreset="next-cloudinary-unsigned" /></p>
         </article>
       </div>
     </div>
  );
}