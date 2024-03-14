import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup' 
// Object Schema Validation

// correspond to name in input
const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
  console.log(values)
}

const validate = values => {
  // Keys similar to initial values
  let errors = {}

  // String values to be assigned for error values
  if(!values.name){
    errors.name = 'Required'
  }
  if(!values.email){
    errors.email = 'Required'
  }
  else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)){
    errors.email = 'Invalid Email Format'
  }
  if(!values.channel){
    errors.channel = 'Required'
  }
  // Return Object
  return errors
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required'),
  channel: Yup.string()
    .required('Required')
})

const Form1 = () => {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
    //validate
  });

  console.log('Form errors', formik.errors);
  console.log('Visited fields', formik.touched);

  return (
    <div className='p-2 bg-slate-400 h-screen'>
      <form onSubmit={formik.handleSubmit} className= 'h-screen bg-slate-200 flex flex-col px-4 py-2 items-center justify-center'> 
        <div className='relative flex flex-col'>
          <label className='mr-8' htmlFor='name'> Name </label>
          <input className='rounded-sm pl-2 py-1' 
            type='text' 
            id='name' 
            name='name' 
            onChange={formik.handleChange} 
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? <div className='text-red-700 absolute left-2/3'>{formik.errors.name}</div> : null}
        </div>
        <div className='relative flex flex-col mt-4'>
          <label className='mr-[30px]' htmlFor='email'> E-mail </label>
          <input 
            className='rounded-sm pl-2 py-1' 
            type='email' 
            id='email' 
            name='email' 
            onChange={formik.handleChange} 
            value={formik.values.email} 
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <div className='text-red-700 w-full absolute left-2/3'>{formik.errors.email}</div> : null}
        </div>
        <div className='relative flex flex-col mt-4 mb-8'>
          <label className='mr-4' htmlFor='channel'> Channel </label>
          <input 
            className='rounded-sm pl-2 py-1' 
            type='text' 
            id='channel' 
            name='channel' 
            onChange={formik.handleChange} 
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />
          {formik.touched.channel && formik.errors.channel ? <div className='text-red-700 absolute left-2/3'>{formik.errors.channel}</div> : null}
        </div>
        <div className=''>
          <button type='submit' className='mt-2 bg-black text-white font-bold p-2 rounded-lg'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form1