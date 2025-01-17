import Hero from "../components/hero/hero";
import Head from "next/head";
import classes from "./event-submission.module.css";
import SubmitForm from "../components/form/SubmitForm"


function eventSubmission() {


  return (
    <>
      <Head>
        <title>Desci events around the globe</title>
        <meta
          name="description"
          content="A list of descentralized science events around the globe. Contribute and share Events"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="desci.global" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desci events around the globe" />
        <meta
          property="og:description"
          content="A list of descentralized science events around the globe. Contribute and share Events"
        />
        <meta
          property="og:image"
          content="https://desciglobal.vercel.app/images/og-image.png"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="desci.global" />
        <meta property="twitter:url" content="desci.global" />
        <meta name="twitter:title" content="Desci events around the globe" />
        <meta
          name="twitter:description"
          content="A list of descentralized science events around the globe. Contribute and share Events"
        />
        <meta
          name="twitter:image"
          content="https://desciglobal.vercel.app/images/og-image.png"
        />
      </Head>

      <Hero headingText="Submit an event" />
      <div className={classes.wrapper}>
        <SubmitForm/>
        
      </div>
    </>
  );

  }
export default eventSubmission;
