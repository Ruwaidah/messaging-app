import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = () => {};
  return (
    <div className="ResetPassword-component">
      <div>
        <img src="https://img.icons8.com/?size=100&id=58562&format=png&color=000000" />
        <h4>Connect</h4>
      </div>
      <div>
        <p>Reset Your Password</p>
        <p>
          Enter your Email below, and we'll email you instructions to reset your
          password.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ResetPassword;
