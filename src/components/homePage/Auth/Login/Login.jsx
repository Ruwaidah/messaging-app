import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../../reducers/usersSlice";
import { useState } from "react";

const Login = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUser(data));
  };
  console.log(errors);
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
