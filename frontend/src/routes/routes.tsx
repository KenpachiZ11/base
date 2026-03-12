import { createBrowserRouter } from "react-router-dom";

import { App } from "@/App";

const routes = [
  { path: '/', element: <App /> },
  { path: '', element: '' },
  { path: '', element: '' },
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes
  }
]);