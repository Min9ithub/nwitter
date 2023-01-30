import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { auth } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setUserObj(user) : setUserObj(null);
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
    </>
  );
}

export default App;
