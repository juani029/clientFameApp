/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import axiosClient from '../config/axiosClient';

function RegisterForm() {
  const handleSubmit = async (values) => {
    try {
      const { data } = await axiosClient.post('register', values);
      Swal.fire({
        title: data.register ? 'Registro Exitoso!' : 'Usuario ya existe',
        text: data.register
          ? 'Te has registrado correctamente, por favor verifica tu Email para verificar la cuenta'
          : '',
        icon: data.register ? 'success' : 'error',
        position: 'top',
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const userSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    lastName: yup
      .string()
      .min(3, 'Apellido muy corto!')
      .max(15, 'Apellido demasiado largo!')
      .matches(/^[A-Z _]+$/i, 'El apellido solo puede contener letras'),
    password: yup
      .string()
      .min(6, 'La contraseña es demasiado corta!')
      .required('Debes ingresar una contraseña'),
    email: yup
      .string()
      .email('Mail no valido')
      .required('Debes ingresar un mail'),
  });

  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return (
    <div className="flex-col justify-center items-center container">
      <div className=" mb-4 py-10 text-center flex-col justify-center items-center m-auto ">
        <h1 className="text-2xl font-bold block text-[#ffffff]">
          {' '}
          Me gustaría saber como llamarte{' '}
        </h1>
        <h3 className="text-xl font-bold block text-[#ffffff]">
          {' '}
          Tu privacidad es importante, tranqui.
        </h3>
      </div>
      <div className="bg-secondary p-8 shadow-md shadow-secondary rounded-xl w-full md:m-auto ">
        <header className="flex items-center  justify-center pt-2 pb-4">
          <h2 className="text-2xl font-bold text-[#ffffff]">Escríbelo aquí</h2>
        </header>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
          validationSchema={userSchema}
        >
          {({ values }) => (
            <Form>
              <div>
                <label
                  htmlFor="name"
                  className="font-bold  block text-[#ffffff]"
                >
                  {' '}
                  Nombre
                </label>
                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  className="px-3 py-2 focus: outline-none rounded w-full "
                />

                <ErrorMessage name="name" component="p" />
                <label className=" font-bold block text-[#ffffff] mt-5 ">
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
                <label className=" font-bold block text-[#ffffff]  mt-5">
                  {' '}
                  Contraseña
                </label>
                <Field
                  name="password"
                  type="password"
                  className="px-3 py-2 focus: outline-none rounded w-full "
                  placeholder="Ingresa una contraseña"
                />
                <ErrorMessage name="password" component="p" />
              </div>
              <button
                type="submit"
                // disabled={isSubmitting}
                className=" w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow"
              >
                Continuar
              </button>
            </Form>
          )}
        </Formik>
        <Link to="/login">
          <button className="w-full text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 hover:shadow-228b active:shadow">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterForm;
