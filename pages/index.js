import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1 className={styles.title}>Homepage</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, vel. Obcaecati consequatur distinctio, dicta nam eius,
                    dignissimos cupiditate alias recusandae cumque dolorem
                    consectetur blanditiis. Possimus saepe veniam qui libero
                    eius.
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, vel. Obcaecati consequatur distinctio, dicta nam eius,
                    dignissimos cupiditate alias recusandae cumque dolorem
                    consectetur blanditiis. Possimus saepe veniam qui libero
                    eius.
                </p>
                <Link className={styles.btn} href='/ninjas'>
                    See Ninja Listing
                </Link>
            </div>
        </>
    );
}
