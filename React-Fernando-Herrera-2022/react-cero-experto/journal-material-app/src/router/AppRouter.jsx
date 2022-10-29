import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui/';
import { useCheckAuth } from '../hooks';


export const AppRouter = () => {

  const status = useCheckAuth();

  // Agregamos un loading Global en mi App
  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }

      {/* // Cualquier otra ruta que no definamos va a ir ahi  */}
      <Route path='/*' element={<Navigate to='/auth/login' />} />

      {/* Login y Registro */}
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

      {/* JournalApp */}
      {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
  )
}
