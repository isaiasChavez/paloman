import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PaloMan from '../components/mans/Paloman'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paloworld</title>
        <meta name="description" content="Make yourself!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-full h-screen bg-contain " src="https://spacegeneral.sfo2.digitaloceanspaces.com/assets/paloworld.jpg" alt="Paloworld" />
          <PaloMan test={false} position={{top:'35%',left:'21%'}} />
          <PaloMan test={false}  position={{top:'38.2%',left:'22.4%'}} />
      </main>  
    </div>
  )
}

export default Home
