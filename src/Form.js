import React from 'react'
import { Formik, Form as NewForm } from 'formik'
import * as Yup from 'yup'
import { TextField } from './component/TextField';

const Form = () => {

  const validation = Yup.object({
    firstName: Yup.string().max(15,'First Name Must be under 15 Char').required('First Name Required'),
    lastName:Yup.string().max(10,'Last Name Must be under 15 Char').required('Last Name Required'),
    email: Yup.string().email('Email must be in email format').required('Email is required')
  })
  return (
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
        }}
        validationSchema={validation}
        onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
        }}
    >
        <NewForm>
           <TextField label="First Name" name="firstName" type="text" />
           <TextField label="Last Name" name="lastName" type="text" />
           <TextField label="Email" name="email" type="email" />
          <button type="submit">Submit</button>
      </NewForm>

    </Formik>
  )

}

export default Form