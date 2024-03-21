import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
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

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid Email Format')
    .required('Required'),
  channel: Yup.string()
    .required('Required')
})

const Form2 = () => {
  return (
    <Formik
     className='p-2 bg-slate-400 h-screen'
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={onSubmit}
    >
      <Form className= 'h-screen bg-slate-200 flex flex-col px-4 py-2 items-center justify-center'> 
        <div className='relative flex flex-col'>
          <label className='mr-8' htmlFor='name'> Name </label>
          <Field 
            className='rounded-sm pl-2 py-1' 
            type='text' 
            id='name' 
            name='name' 
          />
          <ErrorMessage name='name' />
        </div>
        <div className='relative flex flex-col mt-4'>
          <label className='mr-[30px]' htmlFor='email'> E-mail </label>
          <Field 
            className='rounded-sm pl-2 py-1' 
            type='email' 
            id='email' 
            name='email' 
          />
          <ErrorMessage name='email' />
        </div>
        <div className='relative flex flex-col mt-4 mb-8'>
          <label className='mr-4' htmlFor='channel'> Channel </label>
          <Field 
            className='rounded-sm pl-2 py-1' 
            type='text' 
            id='channel' 
            name='channel' 
          />
          <ErrorMessage name='channel' />
        </div>
        <div className=''>
          <button type='submit' className='mt-2 bg-black text-white font-bold p-2 rounded-lg'>Submit</button>
        </div>
      </Form>
    </Formik>
  )
}

export default Form2