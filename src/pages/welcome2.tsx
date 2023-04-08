import { Link } from 'react-router-dom'
import w from '../assets/images/welcome2.svg'
export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img src={w} w-200px h-200px/>
      <h2 text-32px mt-48px>
        每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
      <div mt-64px>
        <Link text-32px color="#a5dcfa" font-bold to="/welcome/3">下一页</Link>
      </div>
    </div>
  )
}
