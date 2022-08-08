import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Spinner from "react-bootstrap/Spinner";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function handleStart() {
      setLoading(true);
    }

    function handleStop() {
      setLoading(false);
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <Fragment>
      <Head>
        <title>MLS Soccer Stats</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && (
        <div className="centerSpinner">
          <Spinner animation="border" role="status" />
        </div>
      )}
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
}

export default MyApp;
