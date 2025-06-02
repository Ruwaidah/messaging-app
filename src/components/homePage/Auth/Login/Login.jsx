import { useForm } from "react-hook-form";
import { loginUser } from "../../../../reducers/usersSlice";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = () => {};
  console.log(errors);
  console.log(watch());
  console.log(watch("text") === "", watch("password") === "");
  return (
    <form className="Login-Component" onSubmit={handleSubmit(onSubmit)}>
      <p className="error-para">{errors && errors.text ? "Require !" : null}</p>
      <input
        placeholder="Email/Username"
        type="text"
        className={errors.text ? "error-input" : null}
        {...register("text", {
          required: true,
        })}
      />
      <input
        placeholder="******"
        type="password"
        className={errors.password ? "error-input" : null}
        {...register("password", {
          required: true,
        })}
      />
      <input
        type="submit"
        value="Login"
        className={
          (watch("text") === "") | (watch("password") === "")
            ? "disabled-btn"
            : null
        }
        disabled={
          watch("text") === ""
            ? "disabled"
            : watch("password") === ""
            ? "disabled"
            : ""
        }
      />
    </form>
  );
};

export default Login;
