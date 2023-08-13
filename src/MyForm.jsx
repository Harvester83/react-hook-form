import { useForm } from "react-hook-form";

const MyForm = () => {
  const { register } = useForm();
  // const { name, ref, onChange, onBlur } = register("username");

  return (
    <>
      <form>
        <div>
          <input id="username" type="text" {...register("username")} />
        </div>

        <div>
          <input id="email" type="email" {...register("email")} />
        </div>

        <div>
          <input id="chanel" type="text" {...register("chanel")} />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default MyForm;
