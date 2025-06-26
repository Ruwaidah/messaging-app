import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(localStorage.getItem("token"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors && errors.password ? (
        <div className="error-p">
          <p className="password-rule-p"> Password Must Have:</p>
          <ul className="password-rule">
            <li>at least 8 characters .</li>
            <li>at least one number.</li>
            <li>at least one one uppercase and lowercase letter.</li>
          </ul>
        </div>
      ) : null}
      <input
        placeholder="First Name"
        type="text"
        className={errors.firstname ? "error-input" : null}
        {...register("firstname", {
          required: {
            value: true,
            message: "Require",
          },

          maxLength: {
            value: 10,
            message: "Name is too long",
          },
          minLength: {
            value: 2,
            message: "Name is too short",
          },
        })}
      />

      <input
        placeholder="Last Name"
        type="text"
        className={errors.lastName ? "error-input" : null}
        {...register("lastName", {
          required: {
            value: true,
            message: "Require",
          },

          maxLength: {
            value: 10,
            message: "Name is too long",
          },
          minLength: {
            value: 2,
            message: "Name is too short",
          },
        })}
      />

      <input
        placeholder="Username"
        type="text"
        className={errors.username ? "error-input" : null}
        {...register("username", {
          required: {
            value: true,
            message: "Require",
          },
          pattern: {
            value: /(^([a-zA-Z]){1,})(\d{1,})?(_)?([a-z|A-Z|0-9])$/,

            message: "Invaild Username",
          },
          maxLength: {
            value: 10,
            message: "UserName is too Long",
          },
          minLength: {
            value: 4,
            message: "UserName is too Short",
          },
        })}
      />
      <input
        placeholder="Email"
        type="email"
        className={errors.email ? "error-input" : null}
        {...register("email", {
          required: {
            value: true,
            message: "Require",
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "invalid email",
          },
        })}
      />

      <input
        placeholder="******"
        type="password"
        className={errors.password ? "error-input" : null}
        {...register("password", {
          required: {
            value: true,
            message: "require",
          },
          pattern: {
            value: /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
            message: "Invalid Password",
          },
        })}
      />
      <input
        placeholder="re-type Password"
        type="password"
        className={errors.repassword ? "error-input" : null}
        {...register("repassword", {
          required: true,
        })}
      />
      <input type="submit" value="Create account" />
    </form>
  );
};

export default SignUp;
