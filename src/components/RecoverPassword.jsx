/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

function RecoverPassword() {
  const Validar = (actions) => {
    Swal.fire({
      title: 'Cambio validado',
      text: 'Tu contraseña se ha actualizado correctamente',
      icon: 'success',
      position: 'top',
    });
    actions.setSubmitting(false);
  };
  const newPasswordSchema = Yup.object.shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Contraseña muy corta!')
      .max(50, 'Demasiado larga!')
      .matches('^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$', 'Debe contener números y letras'),
    repeatPassword: Yup.string()
      .required('')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .min(6, 'Contraseña muy corta!')
      .max(50, 'Demasiado larga!'),
  });
  return (
    <div>
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff]">Generar nueva Contraseña</h2>
      </header>
      <Formik
        initialValues={{ password: '', repeatpassword: '' }}
        validationSchema={newPasswordSchema}
        onSubmit={Validar}
      >
        <Form>
          {' '}
          <label className=" font-bold block text-[#ffffff]  mt-5"> Nueva Contraseña</label>
          <Field
            name="password"
            type="password"
            className="px-3 py-2 focus: outline-none rounded w-full "
            placeholder="Ingresa la nueva contraseña"
          >
            <ErrorMessage name="password" component="p" />
          </Field>
          <label className=" font-bold block text-[#ffffff]  mt-5"> Repíte la Contraseña</label>
          <Field
            name=" repeatpassword"
            type="password"
            className="px-3 py-2 focus: outline-none rounded w-full "
            placeholder="Repite la contraseña"
          />
          <ErrorMessage name=" repeatpassword" component="p" />
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

export default RecoverPassword;
