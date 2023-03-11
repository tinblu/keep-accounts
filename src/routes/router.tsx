import { createBrowserRouter } from 'react-router-dom'
import { RedirectWelcome1 } from '../components/RedirectWelcome1'
import { MainLayout } from '../layout/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <RedirectWelcome1 />,
    children: [
      welcomeRoutes,
    ],
  },
])
