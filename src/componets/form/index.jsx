import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import InputGroup from './inputGroup';

import './form.css';

const Form = () => {
  const validation = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: '',
      phoneNumber: '',
      age: 18,
    },

    validationSchema: Yup.object({
      // username: Yup.string()
      //   .min(6, 'Mininum 6 characters')
      //   .max(12, 'Maximum 12 characters')
      //   .required('Eh điền đi mày'),

      email: Yup.string().email('Email không hợp lệ').required('Vui lòng điền email'),

      phoneNumber: Yup
        .string()
        .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại sai rồi')
        .required('Required!'),

      age: Yup.number().min(0).required('điền tuổi!'),

      firstName: Yup.string()
      .min(2, 'Tên ít nhất 2 kí tự')
      .max(50, 'Tên không vượt quá 50 kí tự')
      .required('Vui lòng điền tên'),

      lastName: Yup.string()
      .min(2, 'Họ ít nhất 2 kí tự')
      .max(50, 'Họ ít nhất 5050 kí tự')
      .required('Required họ!'),

      password: Yup.string()
        .min(6, 'Mật khẩu yếu!')
        .max(12, 'Mật khẩu mạnh')
        .required('Yêu cầu nhập mật khẩu'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], "Password's not match")
        .required('Required nhập lại MK'),
    }),

    onSubmit: (values) => {
      console.log('««««« values »»»»»', values);
    },
  });

  const onChangeAge = (e) => {
    validation.setFieldValue('age', +e.target.value);
  }

  const onBlurAge = () => {
    validation.setFieldTouched('age', true);
  }

  return (
    <div>
      <h1>Form group</h1>
      <div className="d-flex flex-column" >
        <InputGroup
          label="Email"
          name="email"
          validation={validation}
          // classes="invalid"
          // classes={isValidEmail() ? "valid" : "invalid"}
        />

        {/* {isValidEmail && <p className="text-danger">{validation.errors.email}</p>} */}

        <InputGroup
          label="Phone"
          name="phoneNumber"
          validation={validation}
          classes="valid"
        />

        <InputGroup
          label="First name"
          name="firstName"
          validation={validation}
        />

        <InputGroup
          label="Last name"
          name="lastName"
          validation={validation}
        />

        <InputGroup
          label="password"
          type="password"
          name="password"
          validation={validation}
        />

        <InputGroup
          label="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          validation={validation}
        />

        <input
          type="text"
          name="age"
          // validation={validation}
          value={validation.values.age}
          onChange={onChangeAge}
          onBlur={onBlurAge}
        />
        <button onClick={validation.handleSubmit}>Click to submit</button>
      </div>
    </div>
  );
};

export default Form;
