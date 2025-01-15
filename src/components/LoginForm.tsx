import { useForm, SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import "../styles/login-form.css";
import logo from "../assets/hhvii-logo.png";

interface FormInput {
  email: string;
  password: string;
}

export default function Login({ setIsLoading }) {
  const { register, handleSubmit } = useForm<FormInput>();

  function onSubmit(data: SubmitHandler<FormInput>) {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        setIsLoading(false);
      });
  }

  return (
    <div className="login-container">
      <img className="logo" src={logo} />
      <h1>HELL'S HEROES HQ</h1>
      {/* {error && <p>{error}</p>} */}
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="password" {...register("password")} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
