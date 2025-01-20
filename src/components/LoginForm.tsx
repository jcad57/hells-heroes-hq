import { useForm } from "react-hook-form";
import { FormInput } from "../types";
import useManageUser from "../hooks/useManageUser";

export default function Login() {
  const { register, handleSubmit } = useForm<FormInput>();
  const { signUserIn, isLoading } = useManageUser();

  return (
    <div className="login__wrapper">
      <form className="form-container" onSubmit={handleSubmit(signUserIn)}>
        <h1>HELL'S HEROES HQ</h1>
        <h2>Login</h2>
        {isLoading && <div>Loading...</div>}
        <input type="email" {...register("email")} placeholder="Email" />
        <input type="password" {...register("password")} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
