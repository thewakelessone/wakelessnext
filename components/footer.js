import styles from './Footer.module.css'

export default function Footer() {
    return(
        <>
          <div className={styles.footer}>
            <div className={styles.skills}>
                <div>Drawing<br />Painting<br />Illustration<br />Interaction<br />Generative<br />A.I. Art</div>
                <div>Sculpture<br />Modeling<br />Invention<br />3D Printing<br />Blender<br />Z Brush</div>
                <div>Creative<br />Software<br />Content<br />Writing<br />Develop<br />Design</div>
                <div>Javascript<br />React/Nextjs<br />Cloudinary<br />Notion<br />Python<br />PHP</div>

            </div>
            <div> . . . . . . . . . . . . . . . . </div>
            <div className={styles.footnote}>The Wakeless Concophonic Collective</div>
            <div className={styles.footnote}>wakeless.one@gmail.com  385.490.1165</div>
          </div>
        </>
    )
}