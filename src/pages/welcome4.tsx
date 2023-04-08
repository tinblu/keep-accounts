import { useNavigate } from 'react-router-dom'
import w from '../assets/images/welcome4.svg'
import { useLocalStore } from '../stores/useLocalStore'
export const Welcome4: React.FC = () => {
  const { sethasReadWelcomes} = useLocalStore()
  const nav = useNavigate()
  const onSkip = () => {
    sethasReadWelcomes(true)
    nav('/home')
  }
  return (
    <div text-center>
      <img src={w} w-200px h-200px/>
      <h2 text-32px mt-48px>
        云备份 <br />
        再也不怕数据丢失
      </h2>
      <div mt-64px>
        <span text-32px color="#a5dcfa" font-bold onClick={onSkip}>开启应用</span>
      </div>
    </div>  
  )
}
