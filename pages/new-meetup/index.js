import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const NewMeetupPage = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetup) {
    const res = await fetch("/api/new-meetup", {
      body: JSON.stringify(enteredMeetup),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });
    const data = await res.json();
    console.log(data);
    router.replace("/");
  }
  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking oppertunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetupPage;
