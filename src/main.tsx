import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RedirectWelcome1 } from './components/RedirectWelcome1'

const div = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(div)

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>哈喽 <Outlet/></div>,
    errorElement: <RedirectWelcome1/>,
    children: [
      { index: true, element: <div>空</div> },
      {
        path: 'welcome',
        element: <Outlet />,
        children: [
          { index: true, element: <div>welcome</div> },
          {
            path: '1',
            element: (
               <div> 1 <NavLink to="/welcome/2">下一页</NavLink> </div>
            ),
          },
          {
            path: '2',
            element: (
               <div> 2 <NavLink to="/welcome/3">下一页</NavLink> </div>
            ),
          },
          {
            path: '3',
            element: (
               <div> 3 </div>
            ),
          },
        ],
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
