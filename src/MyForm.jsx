import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


let renderCount = 0;

const MyForm = () => {
  renderCount++;

  const { register, control, handleSubmit } = useForm();
  // const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Ultimate Form {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <DevTool control={control}/>
    </>
  );
};

export default MyForm;
