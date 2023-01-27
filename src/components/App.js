import { useState } from "react";
import AppRouter from "components/Router";
import { authSerivce } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authSerivce.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />{" "}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
