import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import Dashboard from './Dashboard';

function Protected() {
  const [auth, setAuth] = useState(false);
  const { loading, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const storageUser = localStorage.getItem('user');
    if (storageUser === null) {
      setAuth(false);
      setLoading(false);
      Swal.fire({
        title: 'Unauthorized',
        text: 'Login is required',
        icon: 'error',
        position: 'center',
      });
      navigate('/login');
    } else {
      setAuth(true);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && 'loading....'}

      {auth && (
        <div className="flex flex-col-reverse md:flex-col w-full">
          <Dashboard />
          <Outlet />
        </div>
      )}
    </>
  );
}

export default Protected;
