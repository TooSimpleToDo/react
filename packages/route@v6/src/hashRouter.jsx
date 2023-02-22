import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter, Router, createHashRouter } from 'react-router-dom';

// pages
import FuncPage from './pages/funcPage';
import ClassPage from './pages/classPage';

const RoutePages = createHashRouter([
  {
    path: '/',
    element: <FuncPage />
  },
  {
    path: '/FuncPage',
    element: <FuncPage />
  },
  {
    path: '/ClassPage',
    element: <ClassPage />
  }
]);

// function RoutePages() {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route index element={<Home />} />
//           <Route path="/pageA" element={<pageA />}></Route>
//         </Route>
//       </Routes>
//     </HashRouter>
//   );
// }

export default RoutePages;
