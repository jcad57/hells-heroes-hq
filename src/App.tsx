import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import CommandCenter from "./components/CommandCenter";
import LoginForm from "./components/LoginForm";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setIsSignedIn(true); // Sign in & show command center
      else setIsSignedIn(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {isLoading && <p>Loading App...</p>}
      {!isSignedIn && !isLoading && <LoginForm setIsLoading={setIsLoading} />}
      {isSignedIn && <CommandCenter />}
    </>
  );
}

export default App;
