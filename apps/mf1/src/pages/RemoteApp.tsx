import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const RemoteAppComponent = lazy(() => import('remote/App'));

const RemoteApp = () => {
  return (
    <Suspense fallback={<div>Loading remote app...</div>}>
      <Routes>
        <Route path="/*" element={<RemoteAppComponent />} />
      </Routes>
    </Suspense>
  );
};

export default RemoteApp;
