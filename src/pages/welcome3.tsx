import { Link } from 'react-router-dom'
import w from '../assets/images/welcome3.svg'
export const Welcome3: React.FC = () => {
  return (
    <div text-center>
      <img src={w} w-200px h-200px/>
      <h2 text-32px mt-48px>
        数据可视化 <br />
        收支一目了然
      </h2>
      <div mt-64px>
        <Link text-32px color="#a5dcfa" font-bold to="/welcome/4">下一页</Link>
      </div>
    </div>
  )
}
