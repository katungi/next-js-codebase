import "antd/dist/antd.css";
import "../styles/tailwind.css";
import "../styles/style.css";
import Head from "next/head";
import Layout from "../components/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <provider options={{ site: process.env.SITE }} session={session}>
          <Layout>
            <Head>
              <title>HostGuest | Explore a different world</title>
              <link rel="icon" href="/hg-icon.ico" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </provider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
