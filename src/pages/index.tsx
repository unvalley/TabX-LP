import {Button, Grid, Image, Card, Code, Divider, Text} from '@geist-ui/react'
import {Chrome} from '@geist-ui/react-icons'
import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header
          style={{
            display: 'flex',
            position: 'relative',
            zIndex: 20,
            height: '65px',
            padding: '0 20px',
          }}
        >
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 1.5rem 0 0',
              fontSize: '30px',
            }}
          >
            {/* <img
              width="166"
              height="32"
              src={
                'data:imge/png;base64,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'
              }
            /> */}
            TabX
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
            <h1 className={styles.title}>TabX</h1>

            <p className={styles.description}>
              a simple Chrome Extension
              <br />
              saves your Tab Life
            </p>

            {/* Chrome Icon */}
            <div style={{textAlign: 'center'}}>
              <Button
                icon={<Chrome size={36} />}
                auto
                type="success"
                size="large"
                style={{
                  margin: '20px 0',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}
              >
                Add to Chrome
              </Button>
            </div>
          </Grid>

          <Grid xs={24} md={24} lg={12}>
            <Image.Browser
              url="https://react.geist-ui.dev/en-us/guide/introduction"
              anchorProps={{rel: 'nofollow'}}
            >
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          TabX
        </a>
        <a href="">Privacy Policy & Regal</a>
      </footer>
    </>
  )
}
