import { Outlet, createBrowserRouter } from 'react-router-dom'
import { RedirectToWelcome1 } from '../components/RedirectToWelcome1'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />
  },
  {
    path: '/home',
    element: <div>home</div>
  },
  {
    path: '/',
    element: <Outlet />,
    errorElement: <RedirectToWelcome1 />,
    children: [
      welcomeRoutes
    ],
  },
])
