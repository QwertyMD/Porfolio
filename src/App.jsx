import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Project from "./components/Project";
import NotFound from "./components/NotFound";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="project" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
