import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import RegisterDataClient from './routes/register/RegisterDataClient';
import RegisterAddress from './routes/register/RegisterAddress';
import RegisterCredential from './routes/register/RegisterCredential';
import Account from './routes/account/Account';
import MyData from './routes/account/data/MyData';
import MyAddress from './routes/account/address/MyAddress';
import MyRequests from './routes/account/MyRequests';
import MyExchanges from './routes/account/MyExchanges';
import MyTickets from './routes/account/MyTickets';
import MyCards from './routes/account/MyCards';
import EditData from './routes/account/data/EditData';
import EditPassword from './routes/account/data/EditPassword';
import ViewAddress from './routes/account/address/ViewAddress';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true,element: <Home/>},
      {path: "/login",element: <Login/>},
      {path: "/register",element: <RegisterDataClient/>},
      {path: "/register-address",element: <RegisterAddress/>},
      {path: "/register-credential",element: <RegisterCredential/>},
      {
        path: "/account",
        element: <Account/>,
        children: [
          {index: true,element: <MyData/>},
          {path: "/account/",element: <MyData/>},
          {path: "/account/edit",element: <EditData/>},
          {path: "/account/edit-password",element: <EditPassword/>},
          {path: "/account/my-address",element: <MyAddress/>},
          {path: "/account/my-address/view",element: <ViewAddress/>},
          {path: "/account/my-requests",element: <MyRequests/>},
          {path: "/account/my-exchanges",element: <MyExchanges/>},
          {path: "/account/my-tickets",element: <MyTickets/>},
          {path: "/account/my-cards",element: <MyCards/>}
        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
