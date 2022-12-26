import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Ent from './Footer';
import RegForm from './RegForm';
import EventCard from './EventCard';
import EventList from './EventList';
import Rules from './Rules';
import EnterForm from './EnterForm'
import Filter from './Filter';
import DetailEvent from './DetailEvent';
import reportWebVitals from './reportWebVitals';
import "./firebase.js"
import { doc, getDoc, getFirestore } from "@firebase/firestore";

const firestore = getFirestore();
const docRef = doc(firestore, "test/zJy6I9RbgKErp7iHdXdJ");

const router = createBrowserRouter([
  {
    path: "/", element: <EventList />
  },
  {
    path: "/Ent", element: <Ent />
  },
  {
    path: "/RegForm", element: <RegForm />
  },
  {
    path: "/EnterForm", element: <EnterForm />
  },
  {
    path: "/EventCard", element: <EventCard />
  },
  {
    path: "/EventList", element: <EventList />
  },
  {
    path: "/Rules", element: <Rules />
  },
  {
    path: "/DetailEvent/:cardID", element: <DetailEvent />
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
