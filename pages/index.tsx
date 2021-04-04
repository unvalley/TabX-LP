import {Button, Grid, Image} from '@geist-ui/react'
import {Chrome} from '@geist-ui/react-icons'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const CATCH_COPY = 'Save your Tab Life'
  const SUB_PHRASE = 'Simple tab managegment Extension'
  const APP_NAME = 'TabX'

  const APP_LINK =
    'https://chrome.google.com/webstore/detail/custom-cursor-for-chrome/ogdlpmhglpejoiomcodnpjnfgcpmgale?hl=ja'

  return (
    <>
      <Head>
        <title>
          {CATCH_COPY} | {APP_NAME}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className={styles.header}>
          <a href="/" className={styles.headerlink}>
            <img
              src="/tabx.png"
              width="40"
              height="40"
              style={{marginRight: '10px'}}
            />
            <span>TabX</span>
          </a>
          <nav className={styles.mainnav}>
            <a href="">Add</a>
            <a href="" target="_blank">
              Issues
            </a>
          </nav>
        </header>
      </div>

      <div className={styles.container}>
        <Grid.Container gap={2} justify="center" direction="row-reverse">
          <Grid xs={24} md={24} lg={12} style={{margin: 'auto 0'}}>
            <h1 className={styles.title}>{CATCH_COPY}</h1>
            <p className={styles.description}>{SUB_PHRASE}</p>
            {/* Chrome Icon */}
            <div style={{textAlign: 'center'}}>
              <Button
                icon={<Chrome size={40} />}
                auto
                type="success"
                size="large"
                className={styles.button}
              >
                Add to Chrome
              </Button>
            </div>
          </Grid>

          <Grid xs={24} md={24} lg={12}>
            <Image.Browser url={APP_LINK} anchorProps={{rel: 'nofollow'}}>
              <Image
                width={660}
                height={330}
                src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png"
              />
            </Image.Browser>
          </Grid>
        </Grid.Container>
      </div>

      <footer className={styles.footer}>
        <a href={APP_LINK} target="_blank" rel="noopener noreferrer">
          TabX
        </a>
        <a href={APP_LINK}>Privacy Policy & Regal</a>
      </footer>
    </>
  )
}
