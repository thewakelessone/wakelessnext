import Image from 'next/image'
import styles from '../styles/Gallery.module.css'
import splashPic from '../public/img/splash.png'
import { Special_Elite } from 'next/font/google'
const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] })
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), 'lib/cldstub.json');
  // const jsonData = await fsPromises.readFile(filePath);
  const images = [
    {"public_id": "2", "width": 200, "height": 200},
    {"public_id": "babycyclops1",  "width": 200, "height": 200},
    {"public_id": "bansheebaby1",  "width": 200, "height": 200},
    {"public_id": "bansheebaby5",  "width": 200, "height": 200},
    {"public_id": "bluegod", "width": 200, "height": 200},
    {"public_id": "butterfly1",  "width": 200, "height": 200},
    {"public_id": "casper1",  "width": 200, "height": 200},
    {"public_id": "purple",  "width": 200, "height": 200},
    {"public_id": "ragebaby2", "width": 200, "height": 200},
    {"public_id": "twofaced1",  "width": 200, "height": 200},
    {"public_id": "jellobaby2",  "width": 200, "height": 200},
    {"public_id": "madostriche1", "width": 200, "height": 200},
    {"public_id": "ragebaby3",  "width": 200, "height": 200},
    {"public_id": "bluegod",  "width": 200, "height": 200},
    {"public_id": "maggotbaby2", "width": 200, "height": 200},
    {"public_id": "ulbo", "width": 200, "height": 200},
    {"public_id": "sqwuack1",  "width": 200, "height": 200},
    {"public_id": "satanicsloth", "width": 200, "height": 200},
    {"public_id": "jellobaby3",  "width": 200, "height": 200},
    {"public_id": "octo3",  "width": 200, "height": 200},
    {"public_id": "ragebaby4", "width": 200, "height": 200},
    {"public_id": "satanbaby1",  "width": 200, "height": 200},
    {"public_id": "godbunny1",  "width": 200, "height": 200},
    {"public_id": "jellobaby1", "width": 200, "height": 200}
  ];

//  console.log(images);
  return {
    props: {
      images,
    },
  }
}

export default function Exhibit({images}) {

  return (
    <div className={styles.container}>
      <Gallery>
        {images.map(({ public_id, width, height }) => (
          <Item
            original={`https://res.cloudinary.com/mechanical-hand/image/upload/detail/${public_id}`}
            thumbnail={`https://res.cloudinary.com/mechanical-hand/image/upload/www/${public_id}`}
            className={styles.img}
            width="1024"
            height="1024"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src={`https://res.cloudinary.com/mechanical-hand/image/upload/www/${public_id}`} />
            )}
          </Item>
       ))}
      </Gallery>
    </div>
  );

}

/*
          <Image
            alt="test"
            width={width}
            height={height}
            src={`https://res.cloudinary.com/mechanical-hand/image/upload/${public_id}`}
            className={styles.img}

    {"public_id": "swimbaby6", "width": 200, "height": 200},
    {"public_id": "satanbaby3",  "width": 200, "height": 200},
    {"public_id": "swimbaby4", "width": 200, "height": 200}
*/
