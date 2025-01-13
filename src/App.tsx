import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <>
      {isSignedIn && <div>Signed In</div>}
      {!isSignedIn && <div>Signed Out</div>}
    </>
  );
}

export default App;
