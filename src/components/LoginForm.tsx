import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FormInput, LoginProps } from "../types";

export default function Login({ setIsLoading }: LoginProps) {
  const { register, handleSubmit } = useForm<FormInput>();

  function onSubmit(data: FormInput) {
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
    <div className="login__wrapper">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1>HELL'S HEROES HQ</h1>
        <h2>Login</h2>
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="password" {...register("password")} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
