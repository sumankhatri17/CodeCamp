import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import Homepage from "./Pages/Homepage";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
