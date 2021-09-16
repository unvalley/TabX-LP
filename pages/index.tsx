import { Button, Grid, Image } from '@geist-ui/react'
import { Chrome, Github } from '@geist-ui/react-icons'
import Head from '../components/Head'
import React from 'react'
import styles from '../styles/Home.module.css'

const APP_NAME = 'TabX'
const CATCH_COPY = 'Storing your tabs more simply'
const SUB_PHRASE = 'A simple tab management tool 🪣'

const TITLE = `${APP_NAME} - ${CATCH_COPY}`
const DESCRIPTION =
  'TabX is a chrome Extension for simple tab management. Try it!'

const LP_LINK = 'https://tabx.app'
const GITHUB_LINK = 'https://github.com/unvalley/TabX'

const STORE_LINK =
  'https://chrome.google.com/webstore/detail/tabx/pnomgepiknocmkmncjkcchojfiookljb?hl=en&authuser=1'
const ISSUE_LINK = `${GITHUB_LINK}/issues`

export default function Home() {
  return (
    <html lang="en">
      <Head
        title={TITLE}
        description={DESCRIPTION}
        image="https://tabx.app/public/TabX_ogp.png"
        url={LP_LINK}
      />
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
        <Grid.Container justify="center" direction="row-reverse">
          <Grid xs={24} md={24} lg={12} style={{ margin: 'auto 0' }}>
            <div style={{ paddingBottom: '20px' }}>
              <h2 className={styles.title}>{CATCH_COPY}</h2>
              <p className={styles.description}>{SUB_PHRASE}</p>
            </div>
            <Grid.Container gap={2} justify="center" alignItems="center">
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
              <Button
                icon={<Github size={40} />}
                auto
                type="secondary"
                size="large"
                className={styles.button}
                onClick={() => window.open(GITHUB_LINK, '_blank')}
              >
                Go To GitHub
              </Button>
            </Grid.Container>
          </Grid>

          <Grid xs={24} md={24} lg={12}>
            <Image width={700} height={360} src="/TabX_dark.png" />
          </Grid>
        </Grid.Container>
      </section>
    </html>
  )
}
