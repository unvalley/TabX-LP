import {Button} from '@geist-ui/react'
import {Chrome} from '@geist-ui/react-icons'
import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>TabX</h1>

        <p className={styles.description}>
          a simple Chrome Extension
          <br />
          saves your Tab Life
        </p>

        {/* Chrome Icon */}
        <Button
          icon={<Chrome size={36} />}
          auto
          type="secondary-light"
          size="large"
        >
          Download
        </Button>

        {/* <Display caption={<p>rerender.</p>}>
          <Image src="https://www.inkdrop.app/static/340de0461554362aa0c5b1cccf482653/a89cd/ss-macos-01.png" />
        </Display> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          TabX
          {/* <img src="/vercel.svg" alt="TabX Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
