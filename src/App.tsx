import { useEffect, useState } from "react";
import { auth } from "./data/firebase";
import { onAuthStateChanged } from "firebase/auth";

import CommandCenter from "./components/CommandCenter";
import LoginForm from "./components/LoginForm";

function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoading(true);
            if (user) setIsSignedIn(true); // Sign in & show command center
            else setIsSignedIn(false);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            {isLoading && <p>Loading App...</p>}
            {!isSignedIn && !isLoading && <LoginForm />}
            {isSignedIn && <CommandCenter />}
        </>
    );
}

export default App;
