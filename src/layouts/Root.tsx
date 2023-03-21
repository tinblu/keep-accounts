import { Navigate } from 'react-router-dom'
import { useLocalStor } from '../stores/useLocalStor'
export const Root: React.FC = () => {
  const { hasReadWelcomes } = useLocalStor()
  if (hasReadWelcomes) {
    return <Navigate to="/home"/>
  } else {
    return <Navigate to="/welcome/1"/>
  }
}
