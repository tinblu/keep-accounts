import { WelcomeLayout } from '../layout/WelcomeLayout'
import { Welcome1 } from '../pages/welcome1'
import { Welcome2 } from '../pages/welcome2'
import { Welcome3 } from '../pages/welcome3'
import { Welcome4 } from '../pages/welcome4'

export const welcomeRoutes = {
  path: 'welcome',
  element: <WelcomeLayout />,
  children: [
    { path: '1', element: <Welcome1 /> },
    { path: '2', element: <Welcome2 /> },
    { path: '3', element: <Welcome3 /> },
    { path: '4', element: <Welcome4 /> },
  ],

}
