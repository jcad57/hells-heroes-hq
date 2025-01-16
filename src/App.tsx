import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { UserSessions } from "./types";

import CommandCenter from "./components/CommandCenter";
import LoginForm from "./components/LoginForm";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userSessionsById, setUserSessionsById] = useState<UserSessions[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Store user session
        setUserSessionsById((prevUsers) => [
          ...prevUsers,
          {
            id: user.uid,
            email: user.email,
          },
        ]);
        // Sign in and show command center
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      {isLoading && <p>Loading App...</p>}
      {!isSignedIn && !isLoading && <LoginForm setIsSignedIn={setIsSignedIn} setIsLoading={setIsLoading} />}
      {isSignedIn && <CommandCenter setIsSignedIn={setIsSignedIn} setUserSessionsById={setUserSessionsById} />}
    </>
  );
}

export default App;
