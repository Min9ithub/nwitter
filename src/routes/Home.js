import Nweet from "components/Nweet";
import React, { useEffect, useState } from "react";
import NweetFactory from "components/NweetFactory";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "fbase";

const Home = ({ userObj }) => {
  const [nweets, setNweets] = useState([]);
  //  Read data
  useEffect(() => {
    const q = query(collection(db, "nweets"), orderBy("createdAt", "desc"));
    onSnapshot(q, (querysnapshot) => {
      const nweetArr = querysnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArr);
    });
  }, []);
  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
