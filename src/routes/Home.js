import { db } from "fbase";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  // Add data
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "nweets"), {
        nweet,
        createdAt: serverTimestamp(),
      });
      setNweet("");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Read data
  const getNweets = async () => {
    const dbNweets = await getDocs(collection(db, "nweets"));
    dbNweets.forEach((doc) => {
      const nweetObj = {
        ...doc.data(),
        id: doc.id,
      };
      setNweets((prev) => [nweetObj, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
  }, []);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  console.log(nweets);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
