import '../styles/tailwind.css';
import '../styles/style.css'
import Head from "next/head";
import Layout from "../components/layout";
import { provider } from 'next-auth/client';

export default function MyApp({ Component, pageProps }) {

  const { session } = pageProps;

  return (
  <provider options={{site: process.env.SITE}} session={session}>
     <Layout>
      <Head>
        <title>HostGuest | Explore a different world</title>
        <link rel="icon" href="/hg-icon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  </provider>
  );
}
