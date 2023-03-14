import w from '../assets/images/welcome2.svg'
export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img src={w} />
      <h2 text-32px mt-48px>
        每日提醒 <br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
