import { Button, Display, Grid, Image, Spacer, Text } from '@geist-ui/react'
import { Chrome } from '@geist-ui/react-icons'
import Head from '../components/Head'
import React from 'react'
import styles from '../styles/Home.module.css'

const CATCH_COPY = 'Storing your tabs more simple.'
const SUB_PHRASE = 'Simple tab managegment Extension'
const APP_NAME = 'TabX'
const TITLE = `${APP_NAME} - ${CATCH_COPY}`
const DESCRIPTION = 'TabX is a simple tab management Chrome Extension. Try it!'

const LP_LINK = 'https://tabx.app'
const STORE_LINK =
  'https://chrome.google.com/webstore/detail/tabx/pnomgepiknocmkmncjkcchojfiookljb?hl=en&authuser=1'
const ISSUE_LINK = 'https://github.com/unvalley/TabX/issues'

export default function Home() {
  return (
    <html lang="en">
      <Head title={TITLE} description={DESCRIPTION} image="" url={LP_LINK} />

      <header className={styles.header}>
        <a href="" className={styles.headerlink}>
          <img
            src="/tabx.png"
            width="40"
            height="40"
            alt="app-icon"
            style={{ marginRight: '10px' }}
          />
          <span>TabX</span>
        </a>
        <nav className={styles.mainnav}>
          <a href={STORE_LINK} target="_blank">
            Add
          </a>
          <a href={ISSUE_LINK} target="_blank">
            Issues
          </a>
        </nav>
      </header>

      <section className={styles.container}>
        <Grid.Container gap={2} justify="center" direction="row-reverse">
          <Grid xs={24} md={24} lg={12} style={{ margin: 'auto 0' }}>
            {/* <h1 className={styles.title}>{CATCH_COPY}</h1> */}
            <h2 className={styles.title}>{CATCH_COPY}</h2>
            <p className={styles.description}>{SUB_PHRASE}</p>
            {/* Chrome Icon */}
            <div style={{ textAlign: 'center' }}>
              <Button
                icon={<Chrome size={40} />}
                auto
                type="success"
                size="large"
                className={styles.button}
                onClick={() => window.open(STORE_LINK, '_blank')}
              >
                Add to Chrome
              </Button>
            </div>
          </Grid>

          <Grid xs={24} md={24} lg={12}>
            <Image width={700} height={360} src="/screenshot-dark.png" />
          </Grid>
        </Grid.Container>
      </section>

      {/* <footer className={styles.footer}>
        <a href={STORE_LINK} target="_blank" rel="noopener noreferrer">
          TabX
        </a>
        {/* <Spacer y={1} /> */}
      {/* <a href={STORE_LINK}>Privacy Policy & Regal</a> */}
      {/* </footer> */}
    </html>
  )
}
