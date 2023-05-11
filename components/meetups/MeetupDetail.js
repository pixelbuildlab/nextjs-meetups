import React from "react";
import classes from "./MeetupDetail.module.css";
import Head from "next/head";
const MeetupDetail = (props) => {
  const { image, title, address, description } = props.info;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={classes.details}>
        <img src={image} alt={title} />

        <h1>{title}</h1>
        <address>{address}</address>
        <p>{description}</p>
      </section>
    </>
  );
};

export default MeetupDetail;
