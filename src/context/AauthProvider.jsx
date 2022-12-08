import { createContext, useState } from 'react';
import { createCheckoutRequest } from '../helpers/stripe';
import { updateFirstLogin } from '../helpers/firstLogin';
import { getUserByEmail, updateUser, deleteUserById } from '../helpers/user';
import { confirm } from '../helpers/confirm';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [planTerapia, setPlanTerapia] = useState('En espera...');

  // useEffect(() => {
  //   (async () => {
  //     const userStorage = JSON.parse(localStorage.getItem('user'));
  //     // if (userStorage.login) {
  //     //   console.log(userStorage._id);
  //     //   const res = await axiosClient.get('user/' + userStorage._id);
  //     //   const { user } = res.data;
  //     //   // console.log(user);
  //     //   setUser({
  //     //     email: user.email,
  //     //     name: user.name,
  //     //     id: user._id,
  //     //     firstLogin: user.firstLogin,
  //     //   });
  //     }
  //   })();
  // }, []);

  const putFirstLoginUser = async (id, firstLogin) => {
    try {
      const body = { firstLogin, id };
      const { data } = await updateFirstLogin(body);
      console.log('FIRST LOGIN:', data);
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const postCheckout = async (order) => {
    // console.log('estoy en postCheckout');
    const { data } = await createCheckoutRequest(order);
    return data;
  };

  const getUserEmail = async (email) => {
    const { data } = await getUserByEmail(email);
    return data;
  };

  const putUser = async ({ name, phone, dateOfBirty, age }) => {
    try {
      const newUser = { email: user.email, name, phone, dateOfBirty, age };
      const { data } = await updateUser(newUser);
      console.log('Soy la respuesta del back en el update del auth:', data);
      setUser({
        ...user,
        name: data.user.name,
        age: data.user.age,
        phone: data.user.phone,
        dateOfBirty: data.user.dateOfBirty,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const { data } = await deleteUserById(id);
      console.log('Soy el user eliminado', data);
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  const confirmarCuenta = async (token) => {
    try {
      const { data } = await confirm(token);
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  // const data = useMemo(
  //   () => ({
  //     user,
  //     loading,
  //     setLoading,
  //     email,
  //     setEmail,
  //   }),
  //   []
  // );
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        email,
        setLoading,
        setEmail,
        putFirstLoginUser,
        postCheckout,
        getUserEmail,
        planTerapia,
        setPlanTerapia,
        putUser,
        deleteUser,
        confirmarCuenta,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

export default AuthContext;
