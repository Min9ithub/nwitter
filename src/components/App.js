import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { auth } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
<<<<<<< HEAD
      user ? setUserObj(user) : setUserObj(null);
=======
      if (user) {
        setUserObj(user);
      } else {
      }
>>>>>>> 3c4685d5b1eb556dd1dd939967cecc26afa190b0
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
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
