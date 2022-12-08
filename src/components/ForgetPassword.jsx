/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import axiosClient from '../config/axiosClient';
import useAuth from '../hooks/useAuth';

function ForgetPassword() {
  const { setLoading } = useAuth();

  const Recuperar = async (value) => {
    try {
      const { data } = await axiosClient.post('forget-password', value);
      Swal.fire({
        icon: !data.forget ? 'error' : 'success',
        title: !data.forget ? 'Error' : 'Mail sent',
        text: !data.forget ? data.msg : data.msg,
        position: 'center',
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const recoverPassword = Yup.object().shape({
    email: Yup.string()
      .email('Mail no valido')
      .required('Ingrese un email válido'),
  });
  return (
    <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl m-auto md:w-1/3">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">
          Recuperar Contraseña
        </h2>
      </header>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={recoverPassword}
        onSubmit={async (values, { resetForm }) => {
          await Recuperar(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name" className="font-bold  block text-[#ffffff]">
            {' '}
            Email
          </label>
          <Field
            name="email"
            type="email"
            className="px-3 py-2 focus: outline-none rounded w-full "
            placeholder="Ingresa tu email"
          />
          <ErrorMessage name="email" component="p" />
          <button
            type="submit"
            className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4"
          >
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ForgetPassword;
