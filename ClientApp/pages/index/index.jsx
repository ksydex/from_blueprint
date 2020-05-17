import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.css'
import { Text } from '../../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon"
              href="/favicon.ico"/>
      </Head>

      <main>
        <Text
          color="var(--warning-strong)"
          type="title">
          <h1 className={styles.description}>
            Welcome to <a href="https://nextjs.org">Next.js!!!</a>
          </h1>
        </Text>


        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs"
             className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn"
             className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <Link href="/example">
            <div className={styles.card}>
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
          </Link>
          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg"
               alt="Vercel Logo"
               className={styles.logo}/>
        </a>
      </footer>
    </div>
  )
}
