import '../styles/globals.css'
import Layout from '../components/layout'
import { Special_Elite } from 'next/font/google'
import { Electrolize } from 'next/font/google'

const special_elite = Special_Elite({ weight: '400', subsets: ['latin'] }) 
const electrolize = Electrolize({ weight: '400', subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />   
        </Layout>
    )
}