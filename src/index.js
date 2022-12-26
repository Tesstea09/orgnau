import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import RegForm from './RegForm';
import EventList from './EventList';
import EnterForm from './EnterForm'
import DetailEvent from './DetailEvent';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import "./firebase.js"
import { doc, getFirestore } from "@firebase/firestore";

const firestore = getFirestore();
const docRef = doc(firestore, "test/zJy6I9RbgKErp7iHdXdJ");

const router = createBrowserRouter([
  {
    path: "/", element: <EnterForm />, errorElement: <Error />
  },
  {
    path: "/register", element: <RegForm />
  },
  {
    path: "/login", element: <EnterForm />
  },
  {
    path: "/events", element: <EventList />
  },
  {
    path: "/events/:cardID", element: <DetailEvent />
  },
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
