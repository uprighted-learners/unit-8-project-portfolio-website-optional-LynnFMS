import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
// // Add more page routes below
//   // {
//   //   path: '/home',
//   //   element: <Home />,
//   // },
  
//   // {
//   //   path: '/about',
//   //   element: <About />,
//   // },

//   // {
//   //   path: '/projects',
//   //   element: <Projects />,
//   // },

//   // {
//   //   path: '/hobbies',
//   //   element: <Hobbies />,
//   // },

//   // {
//   //   path: '/work',
//   //   element: <Work />,
//   // },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
