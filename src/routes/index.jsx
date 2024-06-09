import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SignUp from '../pages/signup';
import SignIn from '../pages/signin';
import HomePage from '../pages/home';
import AddEvent from '../pages/addEvent';
import DetailEvent from '../pages/detailEvent';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/addevent" element={<AddEvent />} />
      <Route path="/detailevent" element={<DetailEvent />} />
    </>,
  ),
);
