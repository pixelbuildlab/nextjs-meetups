import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import React from "react";
const MeetupDetails = (props) => {
  return <MeetupDetail info={props.detailsInfo} />;
};

export async function getStaticPaths() {
  const url =
    "mongodb+srv://furqanryk200:X8XNPhUAJ9clVfBA@cluster0.fa9wbc9.mongodb.net/?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: blocking,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    //  [
    //   {
    //     params: { meetupId: "m1" },
    //   },
    //   {
    //     params: { meetupId: "m2" },
    //   },
    // ],
  };
}
export async function getStaticProps(ctx) {
  const meetupId = ctx.params.meetupId;

  const url =
    "mongodb+srv://furqanryk200:X8XNPhUAJ9clVfBA@cluster0.fa9wbc9.mongodb.net/?retryWrites=true&w=majority";

  const client = await MongoClient.connect(url);
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const selectedMeetup = await meetupCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  const convertedID = selectedMeetup._id.toString();
  console.log(selectedMeetup, meetupId);
  return {
    props: {
      detailsInfo: { ...selectedMeetup, _id: convertedID },
    },
  };
}
export default MeetupDetails;
