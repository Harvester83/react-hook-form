import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

const MyForm = () => {
  renderCount++;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumbers: [{ number: "" }],
    },
  });
  // const { name, ref, onChange, onBlur } = register("username");

  const { fields, remove, append } = useFieldArray({ name: "phoneNumbers", control });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Ultimate Form {renderCount / 2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register("username", {
              required: { value: true, message: "Username field is required" },
            })}
          />
          <span style={{ color: "#f00", fontWeight: "bold" }}>
            {errors.username?.message}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: { value: true, message: "Email field is required" },
            })}
          />
          <span style={{ color: "#f00", fontWeight: "bold" }}>
            {errors.email?.message}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="chanel">Chanel</label>
          <input
            id="chanel"
            type="text"
            {...register("chanel", {
              required: { value: true, message: "Chanel field is required" },
            })}
          />
          
          <span style={{ color: "#f00", fontWeight: "bold" }}>
            {errors.chanel?.message}
          </span>

          <div>
            <h6>List of Numbers</h6>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    type="text"
                    {...register(`phoneNumbers.${index}.number`)}
                  />
                  {index > 0 && (<button onClick={() => remove(index)}>REMOVE</button>)}
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={() => append()}>ADD INPUT</button>
        <button type="submit">SUBMIT</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default MyForm;
