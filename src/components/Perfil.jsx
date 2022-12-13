/* eslint-disable no-console */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'yup-phone-lite';
import { useState } from 'react';

function Perfil() {
  const { putUser, user, deleteUser } = useAuth();
  // console.log(user);
  const initialValues = {
    name: user.name,
    phone: user.phone,
    age: user.age,
  };
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // console.log('Soy values:', values);
      // console.log('Soy actions:', actions);
      const data = await putUser(values);
      console.log();
      Swal.fire({
        title: data.updated && 'Usuario editado exitósamente!',
        icon: data.updated ? 'success' : 'error',
        timer: 2500,
      });
      navigate('/home');
    } catch (error) {
      console.log('Error', error);
    }
  };

  const handleDelete = async () => {
    try {
      const data = await deleteUser(user.id);
      console.log('Soy la resuesta del back en el handle:', data);
      if (data.deleted) {
        Swal.fire({
          icon: 'success',
          title: 'Tu cuenta ha sido eliminada correctamente',
          text: 'Cerrando sesión ..',
          timer: 2500,
          timerProgressBar: true,
        });
        localStorage.removeItem('user');
        navigate('/register');
      }
    } catch (error) {
      console.log('Error', error);
    }
  };
  // console.log(user);
  const profileSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Nombre muy corto!')
      .max(15, 'Nombre demasiado largo!')
      .required('No puedes dejar este espacio en blanco!')
      .matches(/^[A-Z _]+$/i, 'El nombre solo puede contener letras'),
    age: Yup.number()
      .required('Porfavor ingresa tu edad')
      .min(18, 'Debes tener al menos 18 años')
      .max(60, 'Debes tener al menos 60 años'),
    dateOfBirty: Yup.date()
      .max(new Date(Date.now() - 567648000000), 'Debes tener al menos 18 años')
      .required('Required'),
    phone: Yup.string()
      .phone('AR', 'Ingresa un teléfono válido')
      .required('El número telefónico es requerido'),
  });

  return (
    <div className="bg-secondary p-4 shadow-md shadow-secondary rounded-xl m-auto w-[90%] md:w-[60%] lg:w-[45%] flex flex-col justify-center">
      <header className="flex items-center  justify-center pt-2 pb-4">
        <h2 className="text-2xl font-bold text-[#ffffff] font-roboto">
          Edita tu Perfil{' '}
        </h2>
      </header>
      <Formik
        initialValues={initialValues}
        validationSchema={profileSchema}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {({ handleChange, values }) => (
          <Form
            className="flex flex-col w-[90%] m-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(values);
            }}
          >
            <label htmlFor="name" className="font-bold  block text-[#ffffff]">
              {' '}
              Nombre
            </label>
            <Field
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              // value={values.name}
              className="px-3 w-full py-2 focus: outline-none rounded lg:w-[60%]"
            />
            <ErrorMessage name="name" component="p" />
            <label htmlFor="phone" className="font-bold  block text-[#ffffff]">
              {' '}
              Número Telefónico
            </label>
            <Field
              // value={values.phone}
              label="phone"
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="Ingresa tu celular"
              className="px-3 py-2 focus: outline-none rounded w-full lg:w-[60%]"
            />
            <ErrorMessage name="phone" component="p" />
            <label htmlFor="age" className="font-bold  block text-[#ffffff]">
              {' '}
              Edad
            </label>
            <Field
              // value={values.age}
              label="age"
              type="text"
              name="age"
              onChange={handleChange}
              placeholder="Ingresa tu edad"
              className="px-3 py-2 focus: outline-none rounded w-full lg:w-[60%]"
            />
            <ErrorMessage name="age" component="p" />
            <label />
            <button
              type="submit"
              className=" w-full lg:w-[40%] text-lg py-2  mb-4 bg-third rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c] text-[#ffffff] mt-4"
            >
              Confirmar
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex justify-end">
        <button
          onClick={handleDelete}
          className=" w-[50%] lg:w-[45%] text-lg p-2  mb-4 bg-eighth rounded-lg text-gray-800 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all  active:hover:bg-[#b1656c]  disabled:cursor-not-allowed text-[#ffffff] mt-4 flex gap-3 items-center justify-center text-center"
        >
          <span>Eliminar Cuenta</span>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Perfil;
