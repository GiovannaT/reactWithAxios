import React from 'react'
import { useForm } from 'react-hook-form';

const Forms: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data: any) => console.log(data);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='email' {...register("email", {required: true})}/>
            <input type='text'{...register("text", {required: true})}/>
            <button type='submit'/>
        </form>
    </div>
  )
}

export default Forms
