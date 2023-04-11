import Image from 'next/image'
import styles from '../styles/Gallery.module.css'
import splashPic from '../public/img/splash.png'
import { Special_Elite } from 'next/font/google'
const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] })
// import {CldImage } from 'next-cloudinary'
// import cloudinary from 'cloudinary'
// import cloudinary from '../lib/cloudinary'
// import images from '../lib/cldstub'

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), 'lib/cldstub.json');
  // const jsonData = await fsPromises.readFile(filePath);
  const images = [
    {"public_id": "www/2", "width": 200, "height": 200},
    {"public_id": "www/babycyclops1",  "width": 200, "height": 200},
    {"public_id": "www/bansheebaby1",  "width": 200, "height": 200},
    {"public_id": "www/bansheebaby5",  "width": 200, "height": 200},
    {"public_id": "www/bluegod", "width": 200, "height": 200},
    {"public_id": "www/butterfly1",  "width": 200, "height": 200},
    {"public_id": "www/casper1",  "width": 200, "height": 200},
    {"public_id": "www/purple",  "width": 200, "height": 200},
    {"public_id": "www/ragebaby2", "width": 200, "height": 200},
    {"public_id": "www/twofaced1",  "width": 200, "height": 200},
    {"public_id": "www/jellobaby2",  "width": 200, "height": 200},
    {"public_id": "www/madostriche1", "width": 200, "height": 200},
    {"public_id": "www/ragebaby3",  "width": 200, "height": 200},
    {"public_id": "www/bluegod",  "width": 200, "height": 200},
    {"public_id": "www/maggotbaby2", "width": 200, "height": 200},
    {"public_id": "www/ulbo", "width": 200, "height": 200},
    {"public_id": "www/sqwuack1",  "width": 200, "height": 200},
    {"public_id": "www/satanicsloth", "width": 200, "height": 200},
    {"public_id": "www/jellobaby3",  "width": 200, "height": 200},
    {"public_id": "www/octo3",  "width": 200, "height": 200},
    {"public_id": "www/ragebaby4", "width": 200, "height": 200},
    {"public_id": "www/satanbaby1",  "width": 200, "height": 200},
    {"public_id": "www/godbunny1",  "width": 200, "height": 200},
    {"public_id": "www/jellobaby1", "width": 200, "height": 200}
  ];

//  console.log(images);
  return {
    props: {
      images,
    },
  }
}

export default function Gallery({images}) {

  return (
       <div className={styles.container}>
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
  );

}

/*

    {"public_id": "www/swimbaby6", "width": 200, "height": 200},
    {"public_id": "www/satanbaby3",  "width": 200, "height": 200},
    {"public_id": "www/swimbaby4", "width": 200, "height": 200}
*/
