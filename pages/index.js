import React, { useEffect } from "react";
import Navigation from "./Main/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Mynewsapp</title>
        <meta name="newspp" content="Top news app" />
      </Head>
      <Navigation />
    </div>
  );
};

export default index;
