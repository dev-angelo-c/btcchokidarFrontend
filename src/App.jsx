import React, { useState } from "react";
import YTLinks from "./Integrations/AirtableRequest";
import Header from "./Components/Header";
import RememberMe from "./Components/RememberMe";
import SideNavigationPanel from "./Components/SideNavigationPanel";
import Column from "./Components/ColumnDataContainer.jsx";
import FormUpload from './Components/FormUpload/';
import { RecoilRoot } from 'recoil';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Header />
        <SideNavigationPanel className="navBar show" />
        <Outlet />
        <RememberMe />
      </>,
    children: [
      {
        path: '/',
        element: <YTLinks />,
        errorElement: <><p>YT ERROR</p></>
      },
      {
        path: '/texts',
        element: <><p>Text</p></>,
        errorElement: <><p>Text ERRORs</p></>
      },
      {
        path: '/blog',
        element: <><p>Blog</p></>,
        errorElement: <><p>Blog ERROR</p></>
      },
      {
        path: '/junkdrawer',
        element: <><p>Junk Drawer</p></>,
        errorElement: <><p>Drawer ERROR</p></>
      },
      {
        path: '/store',
        element: <><p>Store</p></>,
        errorElement: <><p>Store ERROR</p></>
      },
      {
        path: "/ocr",
        element: <FormUpload />,
        errorElement: <><p>Form ERROR</p></>
      }
    ]
  }
]);

export default () => {
  return (
    <Column>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </Column>
  );
}
