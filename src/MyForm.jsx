import { useForm } from 'react-hook-form'


const MyForm = () => {

  
const { register } = useForm();
// const { name, ref, onChange, onBlur } = register("username");

  return (
    <>
      <form action="">
        <div>
          <input name="username" type="text" {...register("username")}/>
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>
      </form>
    </>
  );
};

export default MyForm;
